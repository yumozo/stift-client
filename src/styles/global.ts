import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  html {
    --color-text: #000;
    --color-primary: indigo;
    --color-secondary: yellow;
    --color-bg: #fff;
    --color-subtext: #121212;
  }

  body {
    border-color: var(--color-bg);
    color: var(--color-text);
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .text-editor-buttons button {
    color: gray;
    border-color: slategray;
    margin: 0.3em;
    padding: 0.05em 0.4em;
  }

  .text-editor-buttons #export-button {
    color: indigo;
    background-color: indigo;
  }

  .text-editor-buttons #save-button {
    color: green;
    border-color: green;
  }

  .ProseMirror {
    min-height: 80vh;
    margin: 8px;
  }

  .ProseMirror:focus-visible {
    outline: 0;
  }

  /* #logo {
    font-family: Dancing Script, sans-serif;
  } */
`

export default GlobalStyle