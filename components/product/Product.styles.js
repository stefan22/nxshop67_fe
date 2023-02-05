import styled from 'styled-components'

const TitleContainer = styled.h3`
  display: flex;
  line-height: var(--lineHeightNormal);
  perspective: 200px;
  transform: translateY(-15px) skew(-5deg) rotate(-1deg);
  height: 52px;
  box-sizing: border-box;
  margin: 0;
  max-width: 99%;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;

  span {
    background: var(--darkgrey);
    display: block;
    mix-blend-mode: darken;
    font-size: var(--fontSizeLarge);
    text-align: center;
    transition: color 0.3s linear 0ms;
    color: var(--white);
    padding: 0;
    width: 85%;
    margin: 0 auto;
  }
  a {
    padding: 0 5px;
    color: #fff;
    box-sizing: border-box;
    background: #1565c0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top: 1px solid #818181;
    border-bottom: 1px solid #818181;
    transition: text-decoration 0.35s ease 0ms;
    width: 14%;
    line-height: 44px;
    text-shadow: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const PriceTag = styled.span`
  background: var(--darkgrey);
  transform: rotate(3deg) perspective(80px);
  color: white;
  color(--black);
  padding: 5px;
  line-height: 1.1;
  letter-spacing: 1px;
  font-size: var(--fontSizeMedium);
  width: 50%;
  display: inline-block;
  max-width: fit-content;
  position: absolute;
  border: 1px solid #333;
  box-shadow: var(--b);
  overflow: hidden;
  top: 90px;
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
  top: 40%;
  left: 1%;
  font-weight: 400;
  box-shadow: var(--bs5);
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  width: 53px;
  height: 53px;
  color: var(--white);
  background-color: var(--red);
  border-radius: 50%;
  z-index: 3;
  text-align: center;
  font-size: var(--fontSizeTxt);
  line-height: 1.35;
`

const ItemContainer = styled.div`
  background: var(--itembg);
  border: 1px solid var(--medgrey);
  position: relative;
  display: flex;
  box-shadow: var(--bs);
  flex-direction: column;
  width: 350px;
  height: auto;
  cursor: pointer;
  margin-bottom: 7rem;
  justify-content: space-between;
  z-index: 1;
  transition: all 300ms linear 0ms;

  @media screen and (max-width: 1419px) {
    /* 2 columns - product takes half the width */
    width: 310px;
    height: auto;
    h2,
    p {
      justify-content: center;
      display: flex;
    }
  }

  @media screen and (max-width: 736px) {
    /* up to before ipad mini single column */
    inline-size: 100%;
    box-shadow: none;
    border: none;
    padding: 0;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    h2 {
      font-size: var(--fontSizeLarge);
    }

    h3 {
      text-align: center;
      margin-bottom: 0;
    }
  }

  &:hover {
    filter: brightness(1.1);
    mix-blend-mode: darken;
    background: #f8f9fa;
    h3 span {
      color: #e16740;
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
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);

    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`

export { TitleContainer, OnSaleContainer, PriceTag, ItemContainer }
