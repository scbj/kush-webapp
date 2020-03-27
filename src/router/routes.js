export default [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '',
        name: 'tracks',
        component: () => import('@/views/Tracks.vue')
      },
      {
        path: 'artists',
        name: 'artists',
        component: () => import('@/views/Artists.vue')
      },
      {
        path: 'playlists',
        name: 'playlists',
        component: () => import('@/views/Playlists.vue')
      },
      {
        path: 'extensions',
        name: 'extensions',
        component: () => import('@/views/Extensions.vue')
      }
    ]
  },

  {
    path: '/auth',
    name: 'login',
    component: () => import('@/views/Auth.vue'),
    meta: {
      public: true
    }
  }
]
