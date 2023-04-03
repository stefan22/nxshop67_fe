import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contactus = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  p {
    display: flex;
    justify-content: center;
    color: var(--satred);
    margin: 0;
    line-height: 40px;
    font-weight: 300;
    width: 100%;
  }

  ul {
    width: 810px;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    list-style: none;
    padding: 0;
    li {
      font-size: var(--fontone);
    }
  }
`

export default Contactus