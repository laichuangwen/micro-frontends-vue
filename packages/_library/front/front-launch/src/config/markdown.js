const md = require('markdown-it')()
const { escapeHtml } = require('markdown-it/lib/common/utils')
const slugify = require('transliteration').slugify
const mdClass = '__doc--markdown'

const strip = function(str, tags) {
    const cheerio = require('cheerio')
    const $ = cheerio.load(str, { decodeEntities: false })
    if (!tags || tags.length === 0) {
        return str
    }
    tags = !Array.isArray(tags) ? [tags] : tags
    let len = tags.length
    while (len--) {
        $(tags[len]).remove()
    }
    return $.html()
}

const fetch = function(str, tag) {
    const cheerio = require('cheerio')
    const $ = cheerio.load(str, { decodeEntities: false })
    if (!tag) return str
    return $(tag).html()
}

const wrap = function(render) {
    return function() {
        return render.apply(this, arguments)
            .replace('<code v-pre class="', '<code class="mdhljs ')
            .replace('<code>', '<code class="mdhljs">')
    }
}

const convert = function(str) {
    str = str.replace(/(&#x)(\w{4})/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
    return str
}

const defaultRender = (tokens, idx, options, env, slf) => {
    tokens[idx].attrJoin('class', mdClass)
    return slf.renderToken(tokens, idx, options, env, slf)
}

module.exports = {
    loader: 'vue-markdown-loader/lib/markdown-compiler',
    options: {
        raw: true,
        use: [
            [
                require('markdown-it-anchor'),
                {
                    level: 1,
                    slugify,
                    permalink: true,
                    // RenderPermalink: (slug, opts, state, permalink) => {},
                    permalinkClass: 'header-anchor',
                    permalinkSymbol: '#',
                    permalinkBefore: false
                }
            ],
            [
                require('markdown-it-container'),
                'demo',
                {
                    validate(params) {
                        return params.trim().match(/^demo\s*(.*)$/)
                    },
                    render(tokens, idx) {
                        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                        if (tokens[idx].nesting === 1) {
                            const description = m && m.length > 1 ? m[1] : ''
                            const content = tokens[idx + 1].content
                            const html = convert(strip(content, [
                                'script',
                                'style'
                            ])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                            const script = fetch(content, 'script')
                            const style = fetch(content, 'style')
                            let jsfiddle = { html, script, style }
                            const descriptionHTML = description
                                ? md.render(description)
                                : ''

                            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))

                            return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                            <div class="source" slot="source">${html}</div>
                            ${descriptionHTML}
                            <div class="highlight" slot="highlight">`
                        }
                        return '</div></demo-block>\n'
                    }
                }
            ],
            [
                require('markdown-it-container'),
                'tip'
            ],
            [
                require('markdown-it-container'),
                'warning'
            ]
        ],
        preprocess(MarkdownIt, source) {
            MarkdownIt.renderer.rules.code_inline = (tokens, idx, options, env, slf) => {
                const token = tokens[idx]
                token.attrJoin('class', mdClass)
                return `<code ${slf.renderAttrs(token)}>${escapeHtml(token.content)}</code>`
            }
            MarkdownIt.renderer.rules.table_open = defaultRender
            MarkdownIt.renderer.rules.thead_open = defaultRender
            MarkdownIt.renderer.rules.tbody_open = defaultRender
            MarkdownIt.renderer.rules.tr_open = defaultRender
            MarkdownIt.renderer.rules.th_open = defaultRender
            MarkdownIt.renderer.rules.td_open = defaultRender
            MarkdownIt.renderer.rules.link_open = (tokens, idx, options, env, slf) => {
                tokens[idx].tag = 'md-link'
                return slf.renderToken(tokens, idx, options, env, slf)
            }
            MarkdownIt.renderer.rules.link_close = (tokens, idx, options, env, slf) => `</md-link>`
            MarkdownIt.renderer.rules.image = defaultRender
            MarkdownIt.renderer.rules.ordered_list_open = defaultRender
            MarkdownIt.renderer.rules.bullet_list_open = defaultRender
            MarkdownIt.renderer.rules.list_item_open = defaultRender
            MarkdownIt.renderer.rules.paragraph_open = defaultRender
            MarkdownIt.renderer.rules.blockquote_open = defaultRender
            MarkdownIt.renderer.rules.heading_open = (tokens, idx, options, env, slf) => {
                tokens[idx].attrJoin('class', mdClass)
                tokens[idx].attrJoin('type', tokens[idx].tag)
                tokens[idx].tag = 'md-heading'
                return slf.renderToken(tokens, idx, options, env, slf)
            }
            MarkdownIt.renderer.rules.heading_close = (tokens, idx, options, env, slf) => `</md-heading>`
            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
            return source
        }
    }
}
