import React from "react"
import { MenuIconContainer, MenuIcon } from './styles'

const Burger = ({handleNavbar, navbarOpen}) => {

  return (
        <MenuIconContainer
        onClick={() => {
            handleNavbar()
          }}>
          <MenuIcon aria-label="Navigation Button" menuOpen={navbarOpen} onClick={() => console.log(navbarOpen)}>
            <div />
            <div />
            <div />
          </MenuIcon>
        </MenuIconContainer>
  );
}

export default Burger
