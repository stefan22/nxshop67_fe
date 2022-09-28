import { createGlobalStyle } from 'styled-components'
import '@fontsource/be-vietnam'

const GlobalStyles = createGlobalStyle`
  root, html {
    /* colors */
    --black: #212244;
    --grey: #69697b;
    --gray: #9d9d9d;
    /* white */
    --white: #ffffff;
    --offWhite: #fafafa;
    --ghostwhite: #eaeaea;
    /* red/orange */
    --red: #f94a3d;
    --darkRed: #cf2e2e;
    --orange: #ff9401;
    --amber: #ffcf03;
    --yellow: #ffe507;
    --lightred: #fdecec;
    /* blues */
    --lightBlue: #8ed1fc;
    --darkBlue: #0693e3;
    
    /* vars */
   --measure: 60ch; /* max inline size */
    --space: 3rem; /* elems vertical margin */
    --ratio: 1.5;  /* line height */
    
    /* font sizes */
    --fontSizeSmall: 0.87rem;
    --fontSizeBase: 10px;
    --fontSizeTxt: 1.25rem;
    --fontSizeRegular: 1.5rem;
    --fontSizeMedium: 2rem;
    --fontSizeLarge: 3rem;
    --lineHeightSmall: calc(0.8 * var(--ratio));
    /* font default */
    font-size: var(--fontSizeBase);
    
    /* other */
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --bs2: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
    --bs3: 0 6px 10px 0 rgb(169,3,3,.21), 0 1px 18px 0 rgb(209,11,11,.12), 0 3px 5px -1px rgb(116,9,9,.25);
    --bs4: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    --bs5: 0 2px 3px 0 rgb(60 64 67 / 15%), 0 6px 10px 4px rgb(60 64 67 / 15%);
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0; 
  }
  
  /* outside root */
  *, *:before, *:after {
    inline-size: auto;
    background-color: inherit;
    color: inherit;
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
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
  h1,h2,h3,h4,h5,h6,li,figcaption {
    max-inline-size: var(--measure);
    font-weight: 400;
  }
  
  body {
    font-size: var(--fontSizeRegular);
    font-weight: 400;
    color: var(--black);
    font-family: 'Be Vietnam Pro', sans-serif;
    box-sizing: border-box;
    letter-spacing: -0.003em;
    line-height: var(--ratio);
    background-color: var(--offWhite);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: #fff 0 1px 1px;
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  footer,header,main,nav {
    display: block
  }

  @media (prefers-reduced-motion:no-preference) {
    html:focus-within {
      scroll-behavior: smooth
    }
  }
  
  #__next {
    width: 100%;
    height: 100vh;
  }
  
  form {
    border-radius: 4px;
    height: 450px;
    width: 400px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
  }
  
  button {
    font-size: inherit;
    font-weight: 700;
    display: inline-block;
    cursor: pointer;
    line-height: var(--fontSizeSmall);
    font-family: var(--font-special);
    color: var(--white);
    background-color: var(--black);
    padding: .5em 1.5em .7em;
    border-width: 1px;
    
    .buttonDark {
      border-color: var(--black);
    }
  }
  
  a {
    text-decoration: none;
    color: var(--black);
    a:hover {
      text-decoration: underline;
    }
  }
  
  /* utilities */
  .heading_H1 {
    font-size: var(--fontSizeLarge);
    color: var(--black);
    font-weight: 400;
    margin-block-start: 4.5rem, var(--space);
  }

  .heading_H2 {
    font-size: var(--fontSizeMedium);
    margin: 0;
    font-weight: 400;
    font-style: italic;
    color: var(--gray);
  }

  .heading_H3 {
    font-size: var(--fontSizeMedium);
    font-variant-caps: all-small-caps;
    color: var(--gray);
    padding: 5px 3px;
    border-top-width: medium;
    background-color: var(--offWhite);
    line-height: var(--lineHeightSmall);
    margin-block-end: 3rem;
    font-weight: 400;
  }

  p {
    display: flex;
    font-size: var(--fontRegular);
    color: var(--black);
    padding: 0;
    font-weight: 400;
    margin-block-start: 1.5rem;
  }
`

export default GlobalStyles
