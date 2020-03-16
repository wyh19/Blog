module.exports = {
    base: '/Blog/',
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
    markdown: {
        lineNumbers: true
    }
}