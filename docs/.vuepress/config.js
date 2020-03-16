module.exports = {
    base: '/Blog/',
    title: '文档中心',
    description: 'wyh19文档中心,使用Vuepress编写，用于日常工作中的技术文档积累',
    themeConfig: {
        logo: '/assets/logo.png',
        nav: [
            { text: '文档列表', link: '/' },
            {
                text: '系列文章',
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