---
sidebar: auto
---

# vuepress-plugin-element-ui


<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-ui.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-ui"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-ui.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>

Vuepress plugin - extend [Element UI](https://github.com/ElemeFE/element) base on markdown-it-container


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

## Preview

### el-tabs

~~~ md
:::: el-tabs
::: el-tab-pane label=markdown
* vue
  * vue-cli
  * nuxt
  * vuepress
* react
  * create-react-app
  * nest
:::
::: el-tab-pane label=javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::
::::
~~~

<br/>

:::: el-tabs
::: el-tab-pane label=markdown
* vue
  * vue-cli
  * nuxt
  * vuepress
* react
  * create-react-app
  * nest
:::
::: el-tab-pane label=javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::
::::

### el-collapses

``` md
:::: el-collapse
::: el-collapse-item title="一致性 Consistency"
与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
:::
::: el-collapse-item title="反馈 Feedback"
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
:::
::: el-collapse-item title="效率 Efficiency"
简化流程：设计简洁直观的操作流程；
清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
:::
::: el-collapse-item title="可控 Controllability"
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
:::
::::
```

<br/>

:::: el-collapse
::: el-collapse-item title="一致性 Consistency"
与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
:::
::: el-collapse-item title="反馈 Feedback"
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
:::
::: el-collapse-item title="效率 Efficiency"
简化流程：设计简洁直观的操作流程；
清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
:::
::: el-collapse-item title="可控 Controllability"
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
:::
::::

### el-steps

<br/>

:::: el-steps
::: el-step title="步骤 11" icon="el-icon-edit"
::: el-step title="步骤 2" icon="el-icon-upload"
::: el-step title="步骤 3" icon="el-icon-picture"
::::

## All Componenets

you can use all of element-ui components in below:

```
  'el-collapse-transition', 'el-pagination',      'el-dialog',
  'el-autocomplete',        'el-dropdown',        'el-dropdown-menu',
  'el-dropdown-item',       'el-menu',            'el-submenu',
  'el-menu-item',           'el-menu-item-group', 'el-input',
  'el-input-number',        'el-radio',           'el-radio-group',
  'el-radio-button',        'el-checkbox',        'el-checkbox-button',
  'el-checkbox-group',      'el-switch',          'el-select',
  'el-option',              'el-option-group',    'el-button',
  'el-button-group',        'el-table',           'el-table-column',
  'el-date-picker',         'el-time-select',     'el-time-picker',
  'el-popover',             'el-tooltip',         'el-breadcrumb',
  'el-breadcrumb-item',     'el-form',            'el-form-item',
  'el-tabs',                'el-tab-pane',        'el-tag',
  'el-tree',                'el-alert',           'el-slider',
  'el-icon',                'el-row',             'el-col',
  'el-upload',              'el-progress',        'el-spinner',
  'el-badge',               'el-card',            'el-rate',
  'el-steps',               'el-step',            'el-carousel',
  'el-scrollbar',           'el-carousel-item',   'el-collapse',
  'el-collapse-item',       'el-cascader',        'el-color-picker',
  'el-transfer',            'el-container',       'el-header',
  'el-aside',               'el-main',            'el-footer',
  'el-timeline',            'el-timeline-item',   'el-link',
  'el-divider',             'el-image',           'el-calendar',
  'el-backtop',             'el-page-header',     'el-cascader-panel',
  'el-avatar',              'el-drawer',          'el-popconfirm'
```

of course， you can use element tag in markdown because of vuepress compile markdown by vue-loader。

```
<el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>
```

<el-tag>标签一</el-tag>
<el-tag type="success">标签二</el-tag>
<el-tag type="info">标签三</el-tag>
<el-tag type="warning">标签四</el-tag>
<el-tag type="danger">标签五</el-tag>