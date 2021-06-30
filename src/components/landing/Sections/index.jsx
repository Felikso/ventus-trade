import React from 'react';
import { SectionTitle, Button } from 'components/common';
import { SectionWrapper, SectionsBox, SectionCard, Content, ImageBox  } from './styles';
import { GatsbyImage } from "gatsby-plugin-image"

export const Sections = ({sectionsItems}) => {


  return (
            <SectionWrapper>
              <SectionTitle><h4>Sekcje</h4></SectionTitle>
            <SectionsBox>

              {
                sectionsItems.map(({node}, index) => (
                  <SectionCard
                  key={index}
                  css={`
                  z-index: ${node.z};
                `}>
                  <Content>
                  <SectionTitle small
                  css={`
                    margin-top: 20px;
                  `}><h4>{node.title}</h4></SectionTitle>
                  <p>{node.content}</p>
                  <a href={node.href}>
                    <Button>sprawdź</Button>
                    </a>
                  </Content>
                  <ImageBox>
                  <GatsbyImage image={node.img.childImageSharp.gatsbyImageData} alt={node.title} />
                  </ImageBox>
                  </SectionCard>
                ))
              }
         
            </SectionsBox>
            </SectionWrapper>

  );
};
