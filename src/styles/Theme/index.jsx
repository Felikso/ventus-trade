import React, { useContext } from "react"
import PropTypes from 'prop-types'
import  { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle';
import { darkTheme, lightTheme } from './themeStyles'
import { ThemeContext } from 'providers/ThemeLocalProvider';

const Theme = ({ children }) => {
    const { themeMode } = useContext(ThemeContext);
  return(
  <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
    <>
      <GlobalStyle theme={themeMode}/>
      {children}
    </>
  </ThemeProvider>
)}

Theme.propTypes = {
  children: PropTypes.node,
}

export default Theme
