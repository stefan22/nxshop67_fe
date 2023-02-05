/*
 *  @routeNProgress
 *  It runs on "Routes/page changes"
 * */

import Router from 'next/router'
import NProgress from 'nprogress'
export const routeNProgress = () => {
  NProgress.configure({
    easing: 'ease',
    speed: 850
  })

  Router.events.on('routeChangeStart', () => {
    NProgress.set(0, 0)
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.set(1)
    NProgress.done(true)
  })
  Router.events.on('routeChangeError', () => {
    NProgress.remove()
  })
}
