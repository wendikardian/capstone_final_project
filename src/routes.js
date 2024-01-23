export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/pages/HomePage.vue')
    }, {
        path : '/login',
        name : 'Login',
        component : () => import('./components/auth/WebLogin.vue')
    }, { 
        path: '/signup',
        name : 'Signup',
        component : () => import('./components/auth/WebSignup.vue')
    }
]