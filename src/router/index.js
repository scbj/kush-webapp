import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/router/routes'
import { securePrivateRoutes } from '@/router/middlewares/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  base: process.env.BASE_URL,

  routes
})

router.beforeEach(securePrivateRoutes)

export default router
