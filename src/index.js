const path = require('path')

module.exports = (options, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFiles.js')
  ],
  chainMarkdown (config) {
    config
      .plugin('@springleo/element-ui')
      .use(require('./mdPlugin'), [options])
      .end()
  }
})