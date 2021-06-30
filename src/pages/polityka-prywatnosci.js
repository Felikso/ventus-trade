import React from "react";

import { graphql, useStaticQuery} from "gatsby"
import { Layout, SEO } from "components/common";
import { Hr } from "components/common"
import { Privacy } from "components/privacy"
const PrivacyPolicy = () => {


  const { siteData } = useStaticQuery(
    graphql`
query {

  siteData: site {
    siteMetadata {
      companyName
      city
      street
      code
    }
  }

}
`
);

const policyData = siteData.siteMetadata

	return (
		<Layout>
        <SEO />
            <Hr />
                <Privacy companyName={policyData.companyName} city={policyData.city} street={policyData.street} code={policyData.code}/>
            <Hr />
		</Layout>
	)
};

export default PrivacyPolicy;
