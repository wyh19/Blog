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
                    { text: 'Vue学习笔记', link: '/series/vue-study/' },
                    { text: 'Typescript学习笔记', link: '/series/ts-study/' },
                ]
            },
            {
                text: '日常攻略',
                items: [
                    { text: 'Vue学习笔记', link: '/series/vue-study/' },
                    { text: 'Typescript学习笔记', link: '/series/ts-study/' },
                ]
            }
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