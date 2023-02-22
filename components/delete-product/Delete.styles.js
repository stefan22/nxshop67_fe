import styled from 'styled-components'
import { motion } from 'framer-motion'

const DeleteButton = styled(motion.div)`
  padding: 0;
  margin: 0;
  width: 28%;
  height: 44px;
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding: 0 5px;
    font-size: var(--fontsmall);
    letter-spacing: 0.25px;
    background: var(--satred);
    height: 44px;
    font-weight: 300;
    line-height: 42px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 2px;
    border-bottom: 1px solid var(--satred);
    border-right: 1px solid var(--satred);
    border-top: 1px solid var(--satred);
    transition: all 0.3s linear 0ms;
    cursor: pointer;
    margin: 0 0 0 1px;
    &:hover {
      background: var(--grey);
      overflow: hidden;
      border: 1px solid var(--grey);
      border-left: 1px solid var(--white);
    }
  }
`

export default DeleteButton
