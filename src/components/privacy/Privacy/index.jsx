import React from 'react';
import { SectionTitle } from 'components/common';
import { PrivacyWrapper, PrivacySection } from './styles';

export const Privacy = ({companyName, city, street, code}) => {

  return (
            <PrivacyWrapper>
              <PrivacySection>
                <SectionTitle small><h4>Polityka prywatności</h4></SectionTitle>
                      <h3>Stosowane definicje:</h3>

                      <li><span>Ciasteczka</span> - pliki pobierane oraz przechowywane na urządzeniu Użytkownika odwiedzającego stronę, wiążące się z informacjami dotyczącymi sposobu korzystania z odwiedzanej witryny internetowej.</li>
                      <li><span>Użytkownik</span> - osoba odwiedzająca stronę.</li>
                      <li><span>Administrator</span> - osoba odpowiedzialna za bezpieczne przechowywanie danych osobowych na temat Użytkowników witryny internetowej, zajmująca się ich analizą oraz przetwarzaniem zgodnym z wcześniej wdrożonymi postanowieniami.</li>
                      <li><span>Strona</span> – witryna internetowa odwiedzana przez Użytkownika.</li>

                      <h3>Administrator:</h3>

                      <li>{`Administratorem storny jest przedsiębiorstwo ${companyName} zlokalizowane pod adresem: ${street}, ${city}, ${code}`}.</li>
                      <li>Do gromadzonych danych posiadają dostęp pracownicy przedsiębiorstwa oraz osoby poufne.</li>


                      <h3>Postanowienia ogólne:</h3>

                      <li>Strona wykorzystuje Ciasteczka do celów statystycznych oraz marketingowych. Zastosowanie to umożliwia spersonalizowanie oferty w celu uzyskania jak najlepszego zadowolenia potencjalnego Odbiorcy produktu/usługi.</li>

                      <h3>Cele wykorzystania Ciasteczek:</h3>

                      <li>Na stronie wdrożone jest narzędzie analityczne Yandex Metrica, umożliwiające badanie rotacji Użytkowników na stronie oraz ich zachowań na poszczególnych podstronach. Wyniki badań umożliwiają Administratorowi oraz osobom postronnym poprawienie wydajności odwiedzanej witryny internetowej oraz dostosowywanie odpowiedniej oferty dla potencjalnego Odbiorcy produktu/usługi.</li>

                      <h3>Zgodna na wykorzystanie Ciasteczek:</h3>

                      <li>Użytkownik korzystając ze strony bezpośrednio wyraża zgodę na wykorzystanie Ciasteczek wyżej wymienionych celach marketingowych.</li>


                      <h3>Postanowienia końcowe:</h3>

                      <li>Administrator zastrzega sobie prawo do możliwości wprowadzania zmian w przedstawionej Polityce Ciasteczek, zobowiązując się jednocześnie do bezzwłocznego upublicznienia wdrożonych przekształceń.</li>
              </PrivacySection>
            </PrivacyWrapper>

  );
};
