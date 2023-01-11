import styled from 'styled-components'

const TitleSl = styled.h3`
  display: flex;
  line-height: var(--lineHeightNormal);
  transform: translateY(-30px) skew(-5deg) rotate(-1deg);
  height: 45px;
  box-sizing: border-box;
  margin: 0;
  max-width: 99%;
  box-sizing: border-box;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;

  span {
    background: var(--darkgrey);
    display: block;
    mix-blend-mode: darken;
    font-size: var(--fontSizeLarge);
    text-align: center;
    transition: color .3s linear 0ms;
    color: var(--white);
    padding: 0;
    width: 86%;
    margin: 0 auto;
  }
  a {
    padding: 0 5px;
    color: #fff;
    box-sizing: border-box;
    background: #949494;
    background: #2f83d7;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top: 1px solid #818181;
    border-bottom: 1px solid #818181;
    transition: text-decoration .35s ease 0ms;
    width: 13%;
    line-height: 44px;
    text-shadow: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
`

export default TitleSl
