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
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
}

export default routeNProgress
