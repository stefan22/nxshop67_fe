import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProductsContainer = styled(motion.div)`
  display: flex;
  opacity: 1;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  width: 100%;
  max-width: 1480px;
  height: fit-content;
  justify-content: space-between;
`

export { ProductsContainer }
