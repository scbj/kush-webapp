import store from '@/store'
export function securePrivateRoutes (to, _, next) {
  const isAuthenticated = store.get('auth/isAuthenticated')
  const isPublicRoute = to.meta.public === true

  /**
   * If it is a public road or if the user is logged in, continue navigation.
   * Otherwise, redirect to the login page.
   */
  isPublicRoute || isAuthenticated
    ? next()
    : next({ name: 'login' })
}
