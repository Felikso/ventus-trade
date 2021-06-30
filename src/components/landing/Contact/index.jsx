import React from 'react';
import { SectionTitle } from 'components/common';
import { ContactWrapper, PhoneIcon, MailIcon, BrandInfoSection, ContactInfoSection, ContactBox, ColumnOne, ColumnTwo, LogoBg  } from './styles';

export const Contact = () => {


  return (
            <ContactWrapper>
              <LogoBg />
                <BrandInfoSection>
                
                  <ColumnOne>
                  <h4>Dane</h4>
                  <h5>nazwa</h5>
                  <h5>pełna</h5>
                  <h5>NIP</h5>
                  <h5>REGON</h5>
                  </ColumnOne>
                  <ColumnTwo>
                  <h4>firmowe</h4>
                  <h5>Ventus Trade</h5>
                  <h5>Patrycja Skóra</h5>
                  <h5>8871716875</h5>
                  <h5>020805395</h5>
                  </ColumnTwo>
                </BrandInfoSection>

              <ContactInfoSection>
              <SectionTitle small><h4>Kontakt</h4></SectionTitle>
              <ContactBox><MailIcon /><a href="mail:ventus@ventus-trade.pl">ventus@ventus-trade.pl</a></ContactBox>
              <ContactBox><PhoneIcon /><a href="tel:571 901 144">571 901 144</a></ContactBox>
              </ContactInfoSection>

            </ContactWrapper>

  );
};
