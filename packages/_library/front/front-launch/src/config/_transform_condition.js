/* eslint-disable */
const { getOptions } = require('loader-utils');

const parse = function (source, defs) {
    if (source.indexOf('#if') < 0) {
        return source;
    }

    let deep = 0;
    let index = 0;
    let func = 'var __$arr = [];\n';
    source.replace(/(.*)#(if |elseif |else|endif)(.*)(\n|\r\n|$)/g, (all, pre, keyword, condition, endLine, startIndex) => {
        if (!(/(<!--|\/\/|\/\*)/).test(pre)) {
            return;
        }

        func += `__$arr.push([${index}, ${startIndex}]);`;
        index = startIndex + all.length;
        keyword = keyword.trim();

        // js块注释结束
        if (condition.indexOf('*/') > 0) {
            condition = condition.replace(/\*\**\//g, '');
        }

        if (condition.indexOf('-->') > 0) {
            // html中注释结尾处理
            condition = condition.replace(/--+>/g, '');
        }

        switch (keyword) {
        case 'if':
            deep += 1;
            func += `\nif(${condition}) {\n`;
            break;
        case 'elseif':
            func += `\n} else if(${condition}) {\n`;
            break;
        case 'else':
            func += '\n} else {\n';
            break;
        case 'endif':
            deep -= 1;
            func += '\n}\n';
            break;
        default:
        }
    });
    if (deep !== 0) {
        throw new Error('#if and #endif not matched..');
    }

    if (index < source.length) {
        func += `__$arr.push([${index}, ${source.length}]);`;
    }
    func += 'return __$arr;';

    const arr = evaluate(func, defs);
    const result = arr.map((position) => source.substring(position[0], position[1])).join('');
    // console.log(result)
    return result;
};

/**
 * @return evaluate code with defs
 */
const evaluate = function (code, defs) {
    const args = Object.keys(defs);
    let result;
    try {
        const f = new (Function.bind.apply(Function, [void 0].concat(args, [code])))()// eslint-disable-line
        result = f.apply(void 0, args.map(k => defs[k]))// eslint-disable-line
    } catch (error) {
        throw new Error(`error evaluation: ${code}\n${error}`);
    }
    return result;
};

module.exports = function (source) {
    const options = getOptions(this);
    try {
        return parse(source, options.environment);
    } catch (err) {
        const errorMessage = `condition-loader error: ${err}`;
        this.callback(new Error(errorMessage));
    }
};
