export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login')
    },
    {
        path: '/',
        component: () => import('layouts/Layout'),
        meta: {auth: true},
        children: [
            {path: '', name: 'dashboard', component: () => import('pages/Index')}
        ]
    },
    { // Always leave this as last one
        path: '*',
        component: () => import('pages/Error404')
    }
]
