import React from "react";
import PropTypes from "prop-types"
import { graphql, StaticQuery, useStaticQuery, Link } from "gatsby"
import { Layout, SEO } from "components/common";

import { getImage } from 'gatsby-plugin-image'
import { Hr } from "components/common"
import { CubeHeroSection, Sections, Location, About, Contact } from "components/landing"
const Home = ({ data }) => {

  const mapFirst = getImage(data.mapOne);

  const mapSecond = getImage(data.mapTwo);


  const sectionsItems = data.sections.edges

  const featuresItems = data.features.edges 

/*     const { sections, features, mapOne, mapTwo } = useStaticQuery(
        graphql`
    query {
      mapOne:  file(relativePath: { eq: "maps/mrokocin-mapa.png" }) {
        childImageSharp {
          gatsbyImageData(
              width: 1200, 
              quality: 60, 
              formats: [AUTO, WEBP, AVIF],
              webpOptions: {quality: 75})
          }
        }
        mapTwo:  file(relativePath: { eq: "maps/kłodzko-mapa.png" }) {
          childImageSharp {
            gatsbyImageData(
                width: 1200, 
                quality: 60, 
                formats: [AUTO, WEBP, AVIF],
                webpOptions: {quality: 75})
            }
          }

      sections: allSectionsJson {
        edges {
          node {
            id
            img {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
            href
            content
            title
            style
            z
          }
        }
      }

      features: allFeaturesJson {
        edges {
          node {
            id
            img {
              id
              childImageSharp {
                gatsbyImageData
              }
            }
            short
            content
            title

          }
        }
      }

    }
    `
    );
    

    const mapFirst = getImage(mapOne);

    const mapSecond = getImage(mapTwo);


    const sectionsItems = sections.edges

    const featuresItems = features.edges */
    
	return (
		<Layout>

        <SEO />
        <CubeHeroSection />
        <Hr id="sections" />
        <Sections sectionsItems={sectionsItems}/>
        <Hr id="location" />
        <Location  mapFirst={mapFirst} mapSecond={mapSecond}/>
        <Hr id="about-us" />
        <About featuresItems={featuresItems}/>
        <Hr id="contact" />
        <Contact />
        <Hr/>

		</Layout>
	)
};

/* export default Home; */

export default function HomePage(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }

          mapOne:  file(relativePath: { eq: "maps/mrokocin-mapa.png" }) {
            childImageSharp {
              gatsbyImageData(
                  width: 1200, 
                  quality: 60, 
                  formats: [AUTO, WEBP, AVIF],
                  webpOptions: {quality: 75})
              }
            }
            mapTwo:  file(relativePath: { eq: "maps/kłodzko-mapa.png" }) {
              childImageSharp {
                gatsbyImageData(
                    width: 1200, 
                    quality: 60, 
                    formats: [AUTO, WEBP, AVIF],
                    webpOptions: {quality: 75})
                }
              }
    
          sections: allSectionsJson {
            edges {
              node {
                id
                img {
                  id
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                href
                content
                title
                style
                z
              }
            }
          }
    
          features: allFeaturesJson {
            edges {
              node {
                id
                img {
                  id
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                short
                content
                title
    
              }
            }
          }
    
        }
      `}

      render={data => <Home data={ data } {...props} />}
    />
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
