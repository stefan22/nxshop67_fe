import styled from 'styled-components'
import { motion } from 'framer-motion'

const TitleContainer = styled.h3`
  display: flex;
  perspective: 200px;
  transform: translate(6px, -5px) skew(-10deg) rotate(-1deg);
  height: 44px;
  margin: 0;
  overflow: hidden;
  max-width: 96%;
  flex-wrap: nowrap;
  box-shadow: var(--bs4);
  z-index: 10;
  font-size: var(--fontone);

  span {
    background: var(--darkgrey);
    display: block;
    line-height: 44px;
    mix-blend-mode: darken;
    font-size: var(--fontxt);
    text-align: center;
    transition: color 0.3s linear 0ms;
    color: var(--white);
    padding: 0 5px;
    width: 50%;
    box-shadow: var(--bs4);
    margin: 0 auto;
  }

  button {
    width: 50%;
    svg {
      margin-left: 5px;
    }

    &:hover {
      text-decoration: none;
      background: var(--satred);
      border: 1px solid var(--satred);
      border-left: 1px solid var(--white);
    }
  }
`

const PriceTag = styled.span`
  background: var(--darkgrey);
  transform: rotate(2deg) perspective(200px);
  color: white;
  color(--black);
  padding: 0 3px;
  font-size: var(--fontSizeRegular);
  width: 50%;
  display: inline-block;
  max-width: fit-content;
  position: absolute;
  border: 1px solid #333;
  box-shadow: var(--bs1);
  overflow: hidden;
  top: 5%;
  right: 10px;
  @media screen and (max-width: 1112px) {
    top: 5%;
    right: 5%;
  }
`

const OnSaleContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;
  bottom: 13%;
  left: 1%;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 50%;
  z-index: 20;
  box-shadow: var(--bs4);
  transform: skew(7deg, -15deg) translate(1px, 15px) perspective(400px);
  text-align: center;
  font-size: var(--fontbase);
  line-height: 1.25;
  @media screen and (max-width: 1112px) {
    transition: all 0.2s linear 0ms;
    width: 38px;
    height: 38px;
  }
  @media screen and (max-width: 1005px) {
    transform: skew(10deg, -15deg) translate(0px, 35px) perspective(400px);
  }
`

const ItemContainer = styled(motion.div)`
  opacity: 0.87;
  background: var(--itembg);
  border: 1px solid var(--medgrey);
  display: flex;
  position: relative;
  bottom: 0;
  box-shadow: var(--bs);
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 4rem;
  justify-content: space-between;
  z-index: 1;
  overflow: hidden;
  transition: flex 0.7s ease-in;

  @media screen and (max-width: 1112px) {
    width: 100%;
    max-width: 310px;
    margin: 0 auto 4rem;
  }
  @media screen and (max-width: 1005px) {
    max-width: 340px;
  }
  picture {
    width: 100%;
    display: grid;
    transition: all 350ms ease-in 0ms;
    grid-template-columns: auto;
  }
  &:hover {
    picture {
      transform: scale3d(1.2, 1.2, 1.2);
    }
    h3 span {
      color: var(--satred);
    }
  }
  img {
    padding: 0;
    display: flex;
    margin: 0 auto;
    width: 100%;
    align-self: center;
    height: fit-content;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--dgray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--dgray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`

export { TitleContainer, OnSaleContainer, PriceTag, ItemContainer }
