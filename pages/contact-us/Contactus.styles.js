import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contactus = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  margin: 2rem 0;
  h1 {
    font-size: var(--fontmedium);
  }
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
