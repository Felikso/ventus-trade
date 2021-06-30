import React from "react"
import Burger from "./Burger"
import { HeaderWrapper, BurgerBox, BrandLogo, LogoLink, HomeLink } from "./styles"



const NavHeader = ({ companyName, handleNavbar, navbarOpen }) => {
  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <BrandLogo />
        <h2>{companyName}</h2>
      </LogoLink>
      <BurgerBox>
      <HomeLink to="/">
      start
      </HomeLink>
      {<Burger
       navbarOpen={navbarOpen}
       handleNavbar={handleNavbar} />}
      </BurgerBox>

    </HeaderWrapper>
  )
}

export default NavHeader