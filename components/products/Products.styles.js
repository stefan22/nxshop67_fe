import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProductsContainer = styled(motion.div)`
  display: flex;
  opacity: 1;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  width: 100%;
  margin: 4.5rem 0 3rem;
  max-width: 1480px;
  height: fit-content;
  justify-content: space-between;
`

export { ProductsContainer }
