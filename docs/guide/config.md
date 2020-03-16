# 配置项

这里简单介绍下`.vuepress/config.js`文件里的配置项。
```js
module.exports = {
    title: '云知声文档中心教程',
    description: '云知声文档中心教程，帮你快速入门文档编写',
    themeConfig: {
        logo: '/assets/logo.png',
        nav: [
            { text: '快速入门', link: '/' },
            {
                text: '详细说明',
                items: [
                    {
                        text: 'MD语法',
                        items: [
                            { text: '基本语法', link: '/guide/basic-grammar.md' },
                            { text: '补充语法', link: '/guide/high_grammar.md' },
                        ]
                    },
                    {
                        text: '配置项', items: [
                            { text: '常用配置项', link: '/guide/config.md' },
                            { text: '官方配置文档', link: 'https://www.vuepress.cn/config', target: '_blank' }
                        ]
                    }
                ]
            },
            { text: 'Gitlab', link: 'http://gitlab-iot.yzs.io/frontEnd/doc-basic' },
        ],
        sidebar: 'auto'
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
    ],
}
```
## title
网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

## description
网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。一般用于搜索引擎的收录。

## themeConfig
主题的配置项，这里先简单用到以下3个。

### logo
导航栏 Logo ，Logo 被放置在公共文件目录，即public目录下。

### nav 
导航栏链接，可以嵌套。

### sidebar
这里使用auto自动生成。

## plugins
启用的插件列表，启用前请先安装插件。
