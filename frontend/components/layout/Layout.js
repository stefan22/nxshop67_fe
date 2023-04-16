import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { PageWrapperSl, InnerWrapperSl } from './Layout.styles'
import Header from '../header'
import { useCartState } from '../../utils/cartContext'
import { variants } from '../../utils/animationVariant'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export const Layout = ({ children }) => {
  const { close } = useCartState()
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <PageWrapperSl animate={{ opacity: 1 }}>
        <Header />
        <motion.main
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            restSpeed: 0.5,
            opacity: { duration: 0.35 }
          }}
        >
          <InnerWrapperSl close={close}>{children}</InnerWrapperSl>
        </motion.main>
      </PageWrapperSl>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
