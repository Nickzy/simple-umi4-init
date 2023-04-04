const routesDefault = [
  {
    path: '/login',
    component: './Login',
  },
  {
    path: '/',
    component: '@/layout/index',
    routes: [
      {
        path: '/home',
        component: './Home',
      }
    ],
  },
]
export default routesDefault