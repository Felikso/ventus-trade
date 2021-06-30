import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,800;1,500&display=swap');

html{
  font-size: 16px;
}
*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
  body {
    background-color: ${props =>
      props.theme === 'dark' ? "brown" : "#FFFFFF"};
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  h5{
    font-weight: 100;
  }
  `


