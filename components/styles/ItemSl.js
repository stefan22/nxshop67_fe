import styled from 'styled-components'

const Item = styled.div`
  background: var(--offWhite);
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 460px;
  padding: 3rem 1.5rem;
  margin-bottom: 7rem;
  z-index: 1;
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
    width: 476px;
    padding: 0;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    padding: 0;
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 440px;
    object-fit: contain;
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
    height: 70px;
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
