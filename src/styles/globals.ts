import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url('/fonts/FiraCode.ttf');
  }

  @font-face {
    font-family: 'MavenPro';
    src: url('/fonts/MavenPro.ttf');
  }

  @font-face {
    font-family: 'Alpha centauri';
    src: url('/fonts/Alphacentauri.ttf');
  }

  * {
    margin: 0px;
    padding: 0px;
    appearance: none;
    border: none;
    background-color: transparent;
    outline: none;
    box-sizing: border-box;
    font-size: min(4.2vw, 1.06rem);
    line-height: 1.33;
    color: var(--font-cl);
    font-family: 'MavenPro';
    font-weight: normal;
    text-rendering: optimizeLegibility;
    image-rendering: optimizeQuality;
    list-style: none;
    text-decoration: none;
    transition: all .2s;

    --primary-font-cl: #181818;
    --secondary-font-cl: #3e3e3e;

    --primary-cl: #34df65;
    --primary-cl-light: #2ce861;
    --secondary-cl: #43ed74;
    --red: #e82f2c;
    --yellow: #dee82c;

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
  }

  .btn {
    margin: 2px;
    padding: .375rem 1.5rem;
    border-radius: 6px;

    font-size: var(--text-regular);
    font-weight: var(--font-weight-medium);

    &, * {
      transition: .2s;
      color: var(--primary-font-cl) !important;
      text-decoration: none;
    }
  }

  .btn.btn-primary:focus,
  .navbar-toggler:focus,
  .form-control:focus {
    box-shadow: 0 0 0 0.25rem rgba(67, 237, 116, .8);
  }

  .btn.btn-primary {
    margin: 5px;

    background-color: var(--primary-cl);
    border-color: var(--secondary-cl);

    &:hover *,
    &:hover {
      color: var(--white) !important;
      background-color: var(--primary-cl-light);
    }
  }

  ::selection {
    background-color: var(--primary-cl);
  }

  ::-webkit-scrollbar {
    width: 6px;

    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: var(--primary-cl);
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
