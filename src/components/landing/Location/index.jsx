import React from 'react';
import { SectionTitle } from 'components/common';
import { LocationWrapper, AdressContainer, AdressBox, LocationContent, MapBox, PinPrimary, PinSecondary, AdressPinBox, MapImage } from './styles';

export const Location = ({mapFirst, mapSecond }) => {

  return (
            <LocationWrapper>
              <LocationContent>
              <SectionTitle><h4>Lokalizacja</h4></SectionTitle>
              <p>Główna siedziba przedsiębiorstwa usytuowana jest w mieście Kłodzko położonym na Dolnym śląsku.</p>

              <p>Większość procesów przedsiębiorstwa odbywa się natomiast w miejscowości Mrokocin usytuowanej przy granicy województwa opolskiego oraz dolnośląskiego.</p>
              <AdressContainer>

              <AdressBox>
                <SectionTitle small><h4>Kłodzko</h4></SectionTitle>
                <AdressPinBox>
                <a href="#"><PinPrimary /></a>
                  <h5>Letnia 16/13<br/>57-300</h5>
                </AdressPinBox>
              </AdressBox>

              <AdressBox>
                <SectionTitle small><h4>Mrokocin</h4></SectionTitle>
                <AdressPinBox>
                <a href="#"><PinSecondary /></a>
                <h5>15<br/>57-220</h5>
                </AdressPinBox>
              </AdressBox>

              </AdressContainer>
              </LocationContent>

              <MapBox>
              <a href="https://www.google.pl/maps/dir//Mrokocin+15,+57-223+Mrokocin/@50.4953827,16.9704325,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x470e209991574cb3:0xc786b187e4b95235!2m2!1d16.9748099!2d50.495376"><MapImage image={mapFirst} alt="mapa dojazdu"/></a>
              <a href="https://www.google.pl/maps/dir//Letnia+16,+57-300+K%C5%82odzko/@50.4246643,16.6756758,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x470e16fd18b3eeeb:0x80073a3c0308e305!2m2!1d16.6375892!2d50.4340971"><MapImage image={mapSecond} alt="mapa dojazdu"/></a>
              <p>kliknij w mapę i sprawdź dojazd</p>
              </MapBox>



            </LocationWrapper>

  );
};
