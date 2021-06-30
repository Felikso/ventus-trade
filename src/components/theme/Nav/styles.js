import styled from 'styled-components';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from "assets/svgs/vt-logo.svg";
/* import { Button } from "components/common" */

export const ContactBtn = styled.button`
  background-color: transparent;
  border: 4px solid ${({ theme }) => theme.defColors.blue};
  color:${({ theme }) => theme.defColors.blue};
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  padding: 1rem 1rem;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  background: rgba(255,255,255,.3);
  cursor: pointer;
/*   font-size: 10px; */
  margin: 0;

  @media (min-width: ${({ theme }) => theme.device.m}){
/*     font-size: 14px; */
    margin-left: 20px;
}


&:hover {
  color: #272829;
}

&::before {
  background-color: #eee;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: -1;
}

&:hover::before {
  transform: scaleX(1);
}
`
/* Logo */

export const BrandLogo = styled(Logo)`
    width: 30px;
    height: 100%;
    margin: 0 10px;
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  fill: ${({ theme }) => theme.defColors.white};

`

/* Home Link */

export const HomeLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${({ theme }) => theme.defColors.white};
  text-decoration: none;
  cursor: pointer;
  font-size: clamp(1.5rem, 2.5vw, 4rem); 



@media (min-width: ${({ theme }) => theme.device.m}){
    font-size: clamp(0.6rem,2vw,3rem);

}

  @media (min-width: ${({ theme }) => theme.device.l}){
      font-size: clamp(0.6rem, 2vw, 1rem); 

}


  &:hover {
    color: ${({ theme }) => theme.defColors.black};
    transition: ${({ theme }) => theme.transitions.primary};

  }

  position: relative;
  &::after {
    content: "";
    border-bottom: solid 2px ${({ theme }) => theme.defColors.white};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }
  &:hover {
    &::after {
      transform-origin: left;
      transform: scaleX(1);
    }
}

  @media (min-width: ${({ theme }) => theme.device.m}){
/*     font-size: 14px; */
}

@media (min-width: ${({ theme }) => theme.device.l}){
/*   font-size: 20px; */
}
`

/* Nav */

export const NavWrapper = styled.nav`
  position:  ${({ theme, NavBg }) => NavBg ? "fixed": ""};
/*   min-height: 55px; */
  width: 100%;
  background: ${({ theme }) => theme.defColors.heroBg};
  transition: position 100ms ease-in;
  transition:  background 300ms ease-in;
  transition-delay: 2s;
  z-index: 100;
  
  @media (min-width: ${({ theme }) => theme.device.m}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    z-index: 200;
  }
`

/* Burger */
export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const BurgerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  margin-left: 20px;
  outline: thin-dotted;
  z-index: 11;

  @media (min-width: ${({ theme }) => theme.device.m}){
    display: none;
}

  &:focus{
    outline: none;
  }

  &:active{
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen, theme }) => (menuOpen ? theme.defColors.burgerOpen : theme.defColors.burgerClose)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

/* Header */
export const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;

  a{
  color: ${({ theme }) => theme.defColors.white};
  }

  

  @media (min-width: ${({ theme }) => theme.device.m}){
/*     flex-direction: row-reverse; */
    margin-left: 5em;
  }
  }
`

/* Links */

export const LinkWrapper = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
      display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
    background: ${({ theme }) => theme.defColors.glassBg};
    margin: 0;
    padding: 0;
    align-content: baseline;
    align-self: stretch;
    border: 4px solid white;
    display: grid;
    align-items: stretch;
    justify-content: center;
  li {
    list-style-type: none;
    text-transform: lowercase; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: clamp(1.5rem, 2.5vw, 4rem); 
    white-space: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.device.m}){
    align-items: center;
    width: 50%;
    li{
      height: 40px;
      font-size: clamp(0.6rem,2vw,3rem);
    }
}

    @media (min-width: ${({ theme }) => theme.device.l}){
      li{
        margin: 0 10px;
        font-size: clamp(0.6rem, 2vw, 1rem); 
      }
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: black;

    text-decoration: none;
    cursor: pointer;


    &:hover {
      color: white;
      transition: ${({ theme }) => theme.transitions.primary};

    }
  }
  height: ${({open, linksHeight}) => (open ? linksHeight : "0px")};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.primary};
  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: auto;
    display: flex;
    margin: 0 auto;
    width: calc(100% - 8px);

    .nav-link {
        position: relative;
      &::after {
        content: "";
        border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }
      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
        }
    }
  }
`