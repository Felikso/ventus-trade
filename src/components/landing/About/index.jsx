import React from 'react';
import { SectionTitle } from 'components/common';
import { AboutWrapper, AboutUsSection, FeaturesSection, FeaturesBox, FeaturesContent, FeaturesImg  } from './styles';

export const About = ({featuresItems}) => {


  return (
            <AboutWrapper>
              <AboutUsSection>
                <SectionTitle small><h4>O firmie</h4></SectionTitle>
                <p>Jesteśmy młodym przedsiębiorstwem, prowadzącym własną działalność od początku 2020 roku. Główną naszą motywacją są możliwości kreowane przez współczesny rynek.</p>

                <p>W skład naszego zespołu wchodzą osoby o zróżnicowanych umiejętnościach i kompetencjach. Różnorodność ta pozwala nam na tworzenie wartości istotnej zarówno dla Nabywcy jak i Usługodawcy.</p>

                <p>Zdywersyfikowana działalność umożliwia nam stały rozwój oraz obmyślanie i wdrażanie innowacji.</p>

                <p>Serdecznie zapraszamy do zapoznania się z naszą Ofertą, której zakres sukcesywnie planujemy powiększać.</p>

              </AboutUsSection>
              <SectionTitle small css={`    text-align: right;`}><h4>Fundamenty naszej działalności</h4></SectionTitle>
              <FeaturesSection>

                {
                  featuresItems.map(({node}, index) => (
                    <FeaturesBox key={index}>

                     <FeaturesImg image={node.img.childImageSharp.gatsbyImageData} alt={node.title} />

                    <FeaturesContent>
                    <SectionTitle small><h4>{node.title}</h4></SectionTitle>
                      <p>{node.short}</p>
                      <p>{node.content}</p>
                    </FeaturesContent>

                  </FeaturesBox>
                  ))
                }

              </FeaturesSection>

            </AboutWrapper>

  );
};
