
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        name: 'Home',
        component: () => import('pages/Index.vue') 
      },
      { path: '/diet',
        component: () => import('src/pages/YourDiet.vue') 
      },
      { path: '/child',
        component: () => import('src/pages/ChildGrowth.vue') 
      },
    ]
  },
  { 
    path: '/login',
    component: () => import('src/pages/Login.vue') 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
