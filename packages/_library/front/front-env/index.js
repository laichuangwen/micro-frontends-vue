
export default ({ Vue }, option) => {
    Object.keys(option).forEach(key => Object.defineProperty(Vue.$ctx, key, { value: option[key] }))
}
