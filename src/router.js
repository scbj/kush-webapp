import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Main.vue'),
      children: [
        {
          path: '',
          name: 'tracks',
          component: () => import('./views/Tracks.vue')
        },
        {
          path: 'artists',
          name: 'artists',
          component: () => import('./views/Artists.vue')
        },
        {
          path: 'playlists',
          name: 'playlists',
          component: () => import('./views/Playlists.vue')
        },
        {
          path: 'extensions',
          name: 'extensions',
          component: () => import('./views/Extensions.vue')
        }
      ]
    },

    {
      path: '/auth',
      component: () => import('./views/Auth.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
