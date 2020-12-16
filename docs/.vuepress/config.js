module.exports = {
    title: 'ApplicaSet',
    description: 'Application Toolset',
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png'}],
        ['link', {rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png'}],
        ['link', {rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png'}],
        ['link', {rel: 'icon', sizes: '96x96', type: 'image/png', href: '/favicons/favicon-96x96.png'}],
        ['link', {rel: 'icon', sizes: '160x160', type: 'image/png', href: '/favicons/favicon-160x160.png'}],
        ['link', {rel: 'icon', sizes: '196x196', type: 'image/png', href: '/favicons/favicon-196x196.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#FFFFFF'}],
        ['meta', {name: 'msapplication-TileImage', content: 'favicons/mstile-144x144.png'}],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Services', link: '/services/'},
            {text: 'Story', link: '/story/'},
            {text: 'Architecture', link: '/architecture/'},
            {text: 'Contribution', link: '/contribution/'},
        ],
        searchPlaceholder: 'Search...',
        lastUpdated: true,
        repo: 'applicaset/applicaset.github.io',
        docsDir: 'docs',
        editLinks: true,
        smoothScroll: true
    },
    plugins: [
        ['@vuepress/active-header-links'],
        ['@vuepress/back-to-top'],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-9G9DP496EQ'
            }
        ]
    ]
}
