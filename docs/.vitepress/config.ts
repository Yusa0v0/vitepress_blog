import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    lang: "zh-CN",
    //左上角的标题
    title: 'Yusa_Blog',
    //描述
    description: 'Just a simple blog',
    //主题配置
    themeConfig: {
        //右上角标题左边的logo
        logo: '/vitepress-logo-mini.svg',
        // siteTitle: 'Hello World',
        //右上角的导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ],
        //侧边栏
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            },
        ],
        //页脚,Note that footer will not be displayed when the SideBar is visible.
        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE"> MIT License.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/Yusa0v0"> Yusa'
        },
        //编辑按钮
        editLink: {
            pattern: 'https://github.com/Yusa0v0/vitepress_blog/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        //Ads
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // },
    },

    lastUpdated: true
})
