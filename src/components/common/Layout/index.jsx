import React from 'react';
import Theme from 'styles/Theme';
import { Nav, Footer } from 'components/theme'
import { graphql, useStaticQuery } from "gatsby"
import { BottomNav } from "components/common"
import ScrollBtn from "interactions/ScrollBtn"
import CookiesBanner from "interactions/CookiesBanner"

export const Layout = ({ children }) => {

  const { siteData } = useStaticQuery(
    graphql`
query {

  siteData: site {
    siteMetadata {
      companyName
      city
      street
      code
      email
      phone
      phoneCode
    }
  }

}
`
);

const siteQueryData = siteData.siteMetadata


  return (
    <>
        <Theme>
            <Nav companyName={siteQueryData.companyName} />
            <ScrollBtn showBelow={250} />
            <CookiesBanner showBelow={250} />
            <BottomNav phoneNumber={siteQueryData.phone} phoneCode={siteQueryData.phoneCode} />
            {children}

            <Footer companyName={siteQueryData.companyName} />
        </Theme>
    </>

  );
};
