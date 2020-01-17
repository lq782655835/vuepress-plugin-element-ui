# [vuepress-plugin-element-ui](https://superbiger.github.io/vuepress-plugin-tabs/)

<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-ui.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-ui.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Docs
> https://lq782655835.github.io/vuepress-plugin-element-ui

## Install
> This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D 

```shell
yarn add vuepress-plugin-element-ui -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'element-ui'
  ]
}
```

## Usage

~~~ md
:::: el-tabs

::: el-tab label=title
__markdown content__
:::


::: el-tab label=javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::

::::
~~~