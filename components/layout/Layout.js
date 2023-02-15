import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GlobalStyles from '../../styles/GlobalStyles'
import { PageWrapperSl, InnerWrapperSl } from './Layout.styles'

const mixedOut = {
  enter: { opacity: 0, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
  center: {
    x: 0,
    opacity: 1,
    zIndex: 10,
    transition: {
      delayChildren: 0.5
    }
  }
}

export const Layout = ({ children }) => {
  return (
    <PageWrapperSl animate={{ opacity: 1 }}>
      <GlobalStyles />
      <motion.main
        initial="enter"
        animate="center"
        exit="exit"
        variants={mixedOut}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          restSpeed: 0.5,
          opacity: { duration: 0.3 }
        }}
      >
        <InnerWrapperSl>{children}</InnerWrapperSl>
      </motion.main>
    </PageWrapperSl>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
