import styled from 'styled-components'
import { motion } from 'framer-motion'

const CarouselContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: auto;
  margin: 3rem 0 3rem;
  .item {
    position: relative;
    display: flex;
    width: 100%;

    .caption {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      position: absolute;
      top: 40%;
      font-weight: 600;
      color: var(--white);
      font-size: var(--fontregular);
      p {
        justify-content: center;
        font-size: var(--fontsmall);
        width: 100%;
        display: flex;
        margin: 0 auto;
      }
    }
    @media screen and (max-width: 1210px) {
      border-bottom: 2px solid var(--darkgrey);
    }
  }
  @media screen and (max-width: 1210px) {
    flex-direction: column;
  }
`

export default CarouselContainer
