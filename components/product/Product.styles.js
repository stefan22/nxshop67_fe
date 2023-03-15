import styled from 'styled-components'

const TitleContainer = styled.h3`
  display: flex;
  perspective: 200px;
  transform: translate(6px, -5px) skew(-10deg) rotate(-1deg);
  height: 44px;
  margin: 0;
  max-width: 96%;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;

  span {
    background: var(--darkgrey);
    display: block;
    line-height: 44px;
    mix-blend-mode: darken;
    font-size: var(--fontxt);
    text-align: center;
    transition: color 0.3s linear 0ms;
    color: var(--white);
    padding: 0;
    width: 78%;
    box-shadow: var(--bs4);
    margin: 0 auto;
  }
  a {
    padding: 0 5px;
    color: #fff;
    background: #1565c0;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 2px;
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--grey);
    box-shadow: var(--bs5);
    width: 21%;
    font-weight: 300;
    font-size: var(--fontsmall);
    line-height: 44px;
    text-shadow: none;
    perspective: 200px;
    letter-spacing: 0.35px;
    perspective-origin: 20px center;
    &:hover {
      text-decoration: none;
      background: var(--medgrey);
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
  box-shadow: var(--b);
  overflow: hidden;
  top: 5%;
  right: 10px;
  @media screen and (max-width: 736px) {
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
  box-shadow: var(--bs5);
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 50%;
  z-index: 20;
  box-shadow: 0 2px 5px rgba(0, 0, 0.005);
  transform: skew(7deg, -15deg) translate(1px, 15px) perspective(400px);
  text-align: center;
  font-size: var(--fontbase);
  line-height: 1.25;
  @media screen and (max-width: 736px) {
    transition: all 0.2s linear 0ms;
    width: 38px;
    height: 38px;
  }
  @media screen and (max-width: 699px) {
    transform: skew(10deg, -15deg) translate(0px, 35px) perspective(400px);
  }
`

const ItemContainer = styled.div`
  background: var(--itembg);
  border: 1px solid var(--medgrey);
  display: flex;
  position: relative;
  bottom: 0;
  box-shadow: var(--bs);
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 7rem;
  justify-content: space-between;
  z-index: 1;
  transition: all 300ms linear 0ms;
  @media screen and (max-width: 845px) {
    width: 330px;
  }
  @media screen and (max-width: 699px) {
    width: 440px;
  }

  picture {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
  }

  &:hover {
    filter: brightness(1.1);
    mix-blend-mode: darken;
    background: var(--itemho);
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

  p {
    line-height: 2.75;
    position: absolute;
    top: 13%;
    left: 5%;
    color: var(--black);
    font-weight: 900;
    padding: 1rem;
    margin-block-start: 6rem;
    box-shadow: var(--bs);
    font-size: 1.65rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 70px;
    background-color: var(--red);
    border-radius: 50%;

    &::before {
      content: '£';
    }
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
