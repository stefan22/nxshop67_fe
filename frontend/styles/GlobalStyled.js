import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: BeVietnam;
    src: local('Be Vietnam Pro ExtraLight'),
    url('/fonts/BeVietnamPro-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-stretch: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BeVietnam;
    src: local('Be Vietnam Pro Light'),
    url('/fonts/BeVietnamPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: BeVietnam;
    src: local('Be Vietnam Pro Regular'),
    url('/fonts/BeVietnamPro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: BeVietnam;
    src: local('Be Vietnam Pro Medium'),
    url('/fonts/BeVietnamPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    font-display: swap;
  }

  root, html {
    /* colors */
    --black: #212244;
    --darkgrey:#333333;
    --medgrey: #707070;
    --grey: #69697b;
    --gray: #9d9d9d;
    --dgray:#f3f2f2;
    --logray: #dddddd;
    --itembg: #dedede;
    --itemho: #f8f9fa;
    /* white */
    --white: #ffffff;
    --offwhite: #fafafa;
    --ghostwhite: #eaeaea;
    --goldengray: #868181;
    /* red/orange */
    --red: #f94a3d;
    --ored: #ff4500;
    --satred: #e16740;
    --orange: #ff9401;
    --amber: #ffcf03;
    --yellow: #ffe507;
    --lightred: #fdecec;
    --lired: #fce1e1;
    /* blues */
    --lightblue: #129cdd;
    --darkblue: #63bef6;
    
    /* vars */
   --measure: 60ch; /* max inline size */
    --space: 3rem; /* elems vertical margin */
    --ratio: 1.5;  /* line height */
    
    /* font sizes */
    --fontsmall: 0.84rem;
    --fontbase: 10px;
    --fontone: 14px;
    --fontween: 1rem;
    --fontxt: 1.1em;
    --fontregular: 1.5em;
    --fontmedium: 2em;
    --fontlarge: 2.5em;
    --lineheightsmall: calc(0.8 * var(--ratio));
    
    /* other */
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --bs2: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
    --bs3: 0 6px 10px 0 rgb(169,3,3,.21), 0 1px 18px 0 rgb(209,11,11,.12), 0 3px 5px -1px rgb(116,9,9,.25);
    --bs4: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    --bs5: 0 2px 3px 0 rgb(60 64 67 / 15%), 0 6px 10px 4px rgb(60 64 67 / 15%);
  }
  
  /* outside root */
  *, *:before, *:after {
    overflow-wrap: break-word;
    border: 0 solid;
    box-shadow: none;
    outline: none;
    &:focus,&:active {
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
  
  p,
  h1,h2,h3,h4,h5,h6,
  li,figcaption {
    max-inline-size: var(--measure);
    font-weight: 300;
  }
  
  body {
    font-size: var(--fontxt);
    font-family: BeVietnam;
    line-height: var(--ratio);
    background-color: var(--offWhite);
    color: var(--black);
  }
  
  button {
    font-size: var(--fontext);
    display: inline-block;
    cursor: pointer;
    font-weight: 300;
    color: var(--white);
    background-color: var(--black);
    padding: .5em 1em .345em;
    border-width: 1px;
    
    .buttonDark {
      border-color: var(--black);
    }
  }
 
  picture {
    height: fit-content;
    display: flex;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: var(--black);
    font-weight: 400;
    a:hover {
      text-decoration: underline;
    }
  }
  
  /* utilities */
  .heading_H1 {
    color: var(--black);
    font-weight: 400;
    font-size: var(--fontlarge);
    margin-block-start: 4.5rem, var(--space);
  }

  .heading_H2 {
    font-size: var(--fontmedium);
    margin: 0;
    font-weight: 400;
    font-style: italic;
    color: var(--gray);
  }
  
  h2 {
    padding: 1rem;
    background: var(--offWhite);
  }

  .heading_H3 {
    font-size: var(--fontmedium);
    font-variant-caps: all-small-caps;
    color: var(--goldengray);
    padding: 0;
    margin-top: 1.75rem;
    border-top-width: medium;
    background-color: var(--offWhite);
    line-height: var(--lineheightsmall);
    font-weight: 400;
  }

  p {
    display: flex;
    font-size: var(--fontone);
    color: var(--black);
    padding: 0;
    margin-block-start: 1.5rem;
  }
  .error-message {
    text-align: center;
    line-height: 2;
    color: var(--red);
    margin: 0;
    height: 30px;
    width: 100%;
    display: block;
  }
 

`

export default GlobalStyled
