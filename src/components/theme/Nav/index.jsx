import React, { useState, useEffect } from "react"

import NavHeader from "./NavHeader"
import NavLinks from "./NavLinks"

import { NavWrapper} from "./styles"

export const Nav = ({companyName}) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)

    }
    useEffect(() => {
            window.addEventListener(`scroll`, handleScroll)

            return () => window.removeEventListener(`scroll`, handleScroll)
    })
    const NavBg = scrollPos<-10


      return (

        <NavWrapper NavBg={NavBg}>
          <NavHeader companyName={companyName} handleNavbar={handleNavbar} navbarOpen={navbarOpen} />
          <NavLinks navbarOpen={navbarOpen} handleNavbar={handleNavbar} />
        </NavWrapper>

      )
    }

  
