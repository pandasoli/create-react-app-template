import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-regular.ttf');
  }

  @font-face {
    font-family: 'FiraCode';
    src: url('/fonts/fira-code.ttf');
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    color: var(--primary-font-cl);
    line-height: 1.33;
    font-size: var(--text-regular);
    font-weight: var(--font-weight-regular);
    font-family: 'Poppins';
    text-decoration: none;

    text-rendering: optimizeLegibility;
    image-rendering: optimizeQuality;

    transition: all .2s;
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;

    --primary-font-cl: #000;
    --primary-font-cl-rgb: 0, 0, 0;

    --secondary-font-cl: #666;

    --primary-cl: #fff;
    --primary-cl-light: #eee;

    --secondary-cl: #000;
    --secondary-cl-light: #555;
    --secondary-cl-rgb: 0, 0, 0;

    --red-cl: #de5971;
    --red-cl-rgb: 222, 89, 113;

    --green-cl: #20c997;
    --green-cl-rgb: 32, 201, 151;

    --yellow-cl: #ffc107;
    --yellow-cl-rgb: 255, 193, 7;

    --box-shadow: 0px 0px 3px var(--secondary-cl);

    --header-1: 64px;
    --header-2: 48px;
    --header-3: 42px;
    --header-4: 32px;

    --text-medium: 10px;
    --text-regular: 16px;
    --text-light: 13px;

    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;

    --sm-size: 768px;
    --md-size: 992px;
    --lg-size: 1200px;
  }

  body {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    background-color: var(--primary-cl);
  }

  #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  a {
    color: var(--primary-font-cl);

    &:hover {
      color: var(--secondary-font-cl);
    }
  }

  code {
    display: block;

    margin: 0 4px;
    padding: 4px;

    text-align: left;

    border-radius: 4px;
    background-color: var(--primary-cl-light);

    * {
      font-family: 'FiraCode';
      font-size: .8rem;
    }
  }

  ::selection {
    color: var(--primary-cl);
    background-color: var(--primary-cl);
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 18px;

    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: var(--secondary-cl);
    border: 4px solid transparent;
    background-clip: padding-box;
  }

  span {
    opacity: .8;
  }

  .pace {
    user-select: none;
    pointer-events: none;

    .pace-progress {
      position: fixed;

      height: 3px;
      width: 100%;

      top: 0px;
      right: 100%;
      z-index: 99;

      background-color: var(--primary-cl);
    }
  }

  .pace-inactive {
    display: none;
  }
`
