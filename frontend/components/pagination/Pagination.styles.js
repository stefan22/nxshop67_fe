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
  line-height: 20px;
  width: 100%;
  & > * {
    margin: 0;
    padding: 10px 27px;
    border: 1px solid var(--dgray);
    border-right: 1px solid var(--dgray);
    font-size: var(--fontsmall);
    &:last-child {
      border-right: 0;
    }
    @media screen and (max-width: 590px) {
      padding: 7px 5px;
      line-height: 1.5;
      justify-content: center;
      vertical-align: middle;
      font-size: 0.85rem;
    }
  }
  p {
    color: var(--medgrey);
  }
  a {
    background: var(--darkblue);
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
    @media screen and (max-width: 590px) {
      width: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  a[aria-disabled='true'] {
    background: var(--offwhite);
    color: var(--gray);
    pointer-events: none;
  }
`

export { PaginationStyles }
