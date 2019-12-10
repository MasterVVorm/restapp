import { createGlobalStyle } from 'styled-components'
import bgSrc from '../assets/bg.png'
import font from '../assets/fonts/Museo.otf'

const $GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Museo;
    src: url(${font});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url(${bgSrc});
  }

  #app{
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export default $GlobalStyle