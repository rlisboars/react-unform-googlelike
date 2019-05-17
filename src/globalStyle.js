import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    text-rendering: optimizeLegibility !important;
    font-family: 'Roboto',Helvetica,Arial,sans-serif;
    background: #F1ECF8;
  }
`

export default GlobalStyle
