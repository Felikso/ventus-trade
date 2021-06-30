import React from "react"
import { footerIcons,  footerInfo } from "constans"
import { FooterIconsBox, FooterLogoLink, FooterBrandLogo, FooterIcon, FooterWrapper, FooterSection, FooterLink, FooterInfo, FooterInfoBox, GridBox } from './styles'


export const Footer = ({companyName}) => {

      return (
        <FooterWrapper>

            <FooterSection>
                <GridBox>
                  <FooterLogoLink to="/">
                    <FooterBrandLogo />
                        <h2>{companyName}</h2>
                        </FooterLogoLink>
                        <FooterIconsBox>
                        {footerIcons.map((item, index)=> (
                                    <FooterIcon key={index} href={item.link} title={item.title}>
                                      {item.icon}
                                    </FooterIcon>
                          ))}
                    </FooterIconsBox>
                </GridBox>
            </FooterSection>

            <FooterInfoBox>
            <div>

              {footerInfo.map((item, index)=> (
                          <FooterInfo 
                            to={item.link} 
                            key={index} >
                              {item.title} 
                          </FooterInfo>
                        ))}
            </div>
            </FooterInfoBox>

        </FooterWrapper>
      )
    }

