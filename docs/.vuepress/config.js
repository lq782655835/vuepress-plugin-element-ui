const path = require('path')


module.exports = {
  base: '/vuepress-plugin-element-ui/',
  title: 'vuepress-plugin-element-ui',
  description: "vuepress plugin to extend elementui base on markdown-it-container",
  themeConfig: {
    repo: "https://github.com/lq782655835/vuepress-plugin-element-ui",
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },
  plugins: [
    path.resolve(__dirname, '../../src/index.js'),
  ]
}