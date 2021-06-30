import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import {  GatsbyImage } from 'gatsby-plugin-image'
import { Hr, Button } from 'components/common';
import { CubeSectionBox, Banner, HeroBox, CubeBox, Cube, HeroText, Arrow } from './styles';

export const CubeHeroSection = () => {

    const { cubeWalls } = useStaticQuery(
        graphql`
          query {
            cubeWalls: 
            allFile(filter: {relativeDirectory: {eq: "cube"}}) {
                edges {
                   node {
                    name
                      childImageSharp {
                        gatsbyImageData(
                          width: 270
                          height: 270
                          placeholder: BLURRED
                        )
                      }
                    }
                  }
                }
 }
 `
 )

  return (
      <>
      <Hr />
<CubeSectionBox>
            <HeroText>
                <h1>Ventus <span>Trade</span></h1>
            </HeroText>
        <Banner>

            <HeroBox>
                <h3 className="main-heading">
                    Dywersyfikacja to ciągły rozwój
                </h3>
                <p>
                    Sprawdź naszą ofertę
                </p>
                <div className="button-box">
                <Button>
                oferta
                </Button>
                <Arrow />
                </div>

            </HeroBox>
        </Banner>
        <CubeBox>
            <Cube>
                <div className="cube__container">
                    {
                        cubeWalls.edges.map(({node}, index) => (
                            <div key={index} className={`cube__face cube__face--${node.name}`}>

                            <GatsbyImage className="img__container" image={node.childImageSharp.gatsbyImageData} alt={`obrazki kostka animacja`} />            

                            </div> 
                        ))
                    }
                </div>
            </Cube>
        </CubeBox>
    </CubeSectionBox>
    </>

  );
};
