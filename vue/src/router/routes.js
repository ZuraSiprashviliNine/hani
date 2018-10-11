
export const RouterRoutes = [
    {
        path: '/',
        alias: '/home',
        component: () => import('../components/pages/home')
    },
    {
        path: '/contact',
        component: () => import('../components/pages/contact')
    },
    {
        path: '/register',
        component: () => import('../components/pages/registration')
    },
    {
        path: '/login',
        component: () => import('../components/pages/login')
    },
    {
        path: '/test/:n',
        component: () => import('../components/pages/test')
    }
];

export const JustRoutes = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'about',
        sub: [
            {
                title: 'pricing',
                path: '/about/pricing'
            },
            {
                title: 'company',
                path: '/about/company'
            },
            {
                title: 'team',
                path: '/about/team'
            }
        ]
    },
    {
        path: '/portfolio',
        title: 'portfolio',
        sub: [
            {
                title: 'web',
                path: '/portfolio/web'
            },
            {
                title: 'mobile apps',
                path: '/portfolio/mobile-apps'
            },
            {
                title: 'graphics',
                path: '/portfolio/graphics'
            },
            {
                title: 'plans',
                path: '/portfolio/plans'
            }
        ]
    },
    {
        path: '/services',
        title: 'services'
    },
    {
        path: '/contact',
        title: 'Contact'
    }
];