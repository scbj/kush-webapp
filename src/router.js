import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Tracks from './views/Tracks.vue'
import Artists from './views/Artists.vue'
import Playlists from './views/Playlists.vue'
import Extensions from './views/Extensions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'tracks',
          component: Tracks
        },
        {
          path: 'artists',
          name: 'artists',
          component: Artists
        },
        {
          path: 'playlists',
          name: 'playlists',
          component: Playlists
        },
        {
          path: 'extensions',
          name: 'extensions',
          component: Extensions
        }
      ]
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
