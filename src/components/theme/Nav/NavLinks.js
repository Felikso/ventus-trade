import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';


import { Link } from "gatsby"

import { links } from 'constans/nav-items'

import { LinkWrapper, ContactBtn } from './styles'
const linksHeight = links.length * 100+100+"px"

const NavLinks = ({navbarOpen, handleNavbar}) => {

    return (
        <LinkWrapper open={navbarOpen} linksHeight={linksHeight} >

{
          links.map((link, index) => {
            return (
              <>
                {
                  link.scrollId && (
                    <li key={index}><AnchorLink 
                    key={index}
                    className="nav-link" 
                    href={`#${link.scrollId}`}
                    onClick={() => {
                      handleNavbar()
                    }}>
                      {link.name}
                    </AnchorLink></li>
                  )}

                {
                  link.path && (
                    <li key={index}><Link  
                    key={index}
                    className="nav-link" 
                    href={link.path}
                    onClick={() => {
                      handleNavbar()
                    }} 
                    >{link.name}
                    </Link></li>
                  )}

              </>
            )
          })
          
        }
        <li>
        <AnchorLink
         href="#contact"
         onClick={() => {
          handleNavbar()
        }} 
        ><ContactBtn
        >Kontakt
        </ContactBtn>
        </AnchorLink>
        </li>
      </LinkWrapper>
    );
  }
  
export default NavLinks