import styled from 'styled-components'
import { motion } from 'framer-motion'

const Details = styled(motion.div)`
  opacity: 0.5;
  img {
    max-width: 510px;
    width: 100%;
    height: fit-content;
    object-fit: contain;
  }
  @media screen and (max-width: 736px) {
  }
`

export default Details
