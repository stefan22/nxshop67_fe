import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageWrapperSl = styled(motion.div)`
  opacity: 0.87;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 0;
`

/* products below header comp */
export const InnerWrapperSl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  transition: all 0.3s linear 0ms;
  transform: translateX(0);
  ${props => !props.close && `transform: translateX(-8vw)`};
`
