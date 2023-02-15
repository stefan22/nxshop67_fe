import styled from 'styled-components'
import { motion } from 'framer-motion'

const PaginationStyles = styled(motion.div)`
  opacity: 0.87;
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0 0 2rem;
  border: 1px solid var(--dgray);
  border-radius: 3px;
  & > * {
    margin: 0;
    color: var(--grey);
    padding: 10px 27px;
    border-right: 1px solid var(--dgray);
    font-size: var(--fontsmall);
    &:last-child {
      border-right: 0;
    }
  }
  p {
    color: var(--medgrey);
    font-weight: 300;
  }
  a {
    background: var(--lightblue);
    color: var(--white);
    font-weight: 400;
    letter-spacing: 0.25px;
    &:hover {
      background: var(--darkblue);
    }
  }
  a[aria-disabled='true'] {
    background: var(--offwhite);
    color: var(--gray);
    pointer-events: none;
  }
`

export { PaginationStyles }
