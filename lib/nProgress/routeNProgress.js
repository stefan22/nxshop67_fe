/*
 *  @routeNProgress
 *  It runs on "Route page change" and it renders page loading
 *  progress animation
 *
 * */

import Router from 'next/router'
import NProgress from 'nprogress'

const routeNProgress = () => {
  Router.events.on('routeChangeStart', () => {
    NProgress.set(0, 0)
    NProgress.inc(0.15)
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.set(0.94)
    NProgress.done(true)
  })
  Router.events.on('routeChangeError', () => {
    NProgress.set(0.0)
    NProgress.inc(0.15)
  })
}

export default routeNProgress
