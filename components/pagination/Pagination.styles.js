import styled from 'styled-components'
import { motion } from 'framer-motion'

const PaginationStyles = styled(motion.div)`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0 0 2rem;
  height: 45px;
  border: 1px solid var(--dgray);
  & > * {
    margin: 0;
    padding: 10px 27px;
    border-right: 1px solid var(--dgray);
    font-size: var(--fontsmall);
    &:last-child {
      border-right: 0;
    }
  }
  p {
    color: var(--medgrey);
  }
  a {
    background: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s ease 0ms;
    color: var(--white);
    letter-spacing: 0.25px;
    width: 110px;
    border-color: var(--dgray);
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    &:hover {
      border-color: var(--dgray);
      color: var(--dgray);
      background: rgba(33, 96, 217, 0.72);
    }
  }
  a[aria-disabled='true'] {
    background: var(--offwhite);
    color: var(--gray);
    pointer-events: none;
  }
`

export { PaginationStyles }
