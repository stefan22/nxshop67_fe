import styled from 'styled-components'

const Item = styled.div`
  background: var(--itembg);
  background: #e6e6e6;
  border: 1px solid var(--medgrey);
  position: relative;
  display: flex;
  overflow: auto;
  box-shadow: var(--bs);
  flex-direction: column;
  width: 350px;
  height: 440px;
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;
  margin-bottom: 7rem;
  justify-content: space-between;
  z-index: 1;
  transition: all 400ms linear 0ms;

  @media screen and (max-width: 1419px) {
    /* 2 columns - product takes half the width */
    width: 48%;
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
    //height: auto;
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
    height: auto;
    object-fit: cover;
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

export default Item
