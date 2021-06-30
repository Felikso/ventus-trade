import styled from 'styled-components'
import { Link } from "gatsby"
import { ReactComponent as Logo } from "assets/svgs/vt-logo.svg";


/* Logo */

export const FooterBrandLogo = styled(Logo)`
  width: 50px;
  height: 100%;
  margin: 0 20px;
  fill: ${({ theme }) => theme.defColors.white};
`

export const FooterLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.defColors.white};
  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size:clamp(0.7rem, 2vw, 1.2rem);
  }

`

export const FooterInfoBox = styled.section`
@media(max-width: 340px){
  font-size: 10px;
}

display: flex;
flex-direction: column;
font-size: 12px;
justify-content: center;
align-items: center;
padding: 0.3em 0;
width: 95%;
margin: auto;
border-top: 2px solid ${({ theme }) => theme.defColors.white};

@media (min-width: ${({ theme }) => theme.device.m}){
  flex-direction: row;
  justify-content: flex-end;
  font-size: clamp(.75rem, 2vw, 1rem);

}



`
export const GridBox = styled.div`
    @media(max-width: 340px){
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    display: flex;
p{
    text-align: center;
    font-style: italic;
}
`
export const FooterLogo = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
`

export const FooterSection = styled.section`
font-size: ${({ theme }) => theme.fontSize.m};
display: flex;
justify-content: center;
width: 95%;
margin: auto;
padding: 0.5em 0;

@media (min-width: ${({ theme }) => theme.device.m}){
  font-size: ${({ theme }) => theme.fontSize.xl};
  justify-content: flex-end;
}
`

export const FooterWrapper = styled.footer`

display: flex;
flex-direction: column;
background: ${({ theme }) => theme.defColors.footerBg};

`
/* Footer Icons */
export const FooterIconsBox = styled.div`
  display: flex;
  flex-direction: row;
`
export const FooterIcon = styled.a`
color: ${({ theme }) => theme.colors.footerIcon}; 
font-size: ${({ theme }) => theme.fontSize.xl}; 
transition: ${({ theme }) => theme.transitions.transDefault}; 
margin: 5px;
display: flex;
padding: 10px;
border-radius: 50px;
background: ${({ theme }) => theme.defColors.white};
transition: 0.3s ease-in;
color: ${({ theme }) => theme.defColors.footerBg};
fill: ${({ theme }) => theme.defColors.footerBg};

&:hover{
  color: ${({ theme }) => theme.defColors.white};
  fill: ${({ theme }) => theme.defColors.white};
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	transform: scale(1.5);

}

`

export const FooterInfo = styled(Link)`
color: ${({ theme }) => theme.defColors.white}; 
text-decoration: none;
margin: .3em;
transition: ${({ theme }) => theme.transitions.primary}; 
&:hover{
  color: ${({ theme }) => theme.colors.secondary};
  /* filter: brightness(0.6); */
}

&::before {
  content: "|   ";
  color: ${({ theme }) => theme.defColors.white}; 
}
`