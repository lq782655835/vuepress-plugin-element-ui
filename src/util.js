const  getAttributes = (info, mark) => {
    return info
        // sanitize input
        .trim()
        .slice(mark.length)
        .trim()
}

const fromCamelCase = (str, separator = '-') =>
    str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

module.exports = {
    getAttributes,
    fromCamelCase
}