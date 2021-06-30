import styled from 'styled-components';



/* Privacy */

export const PrivacySection = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 2.5em;
  font-size:clamp(0.9rem, 1.8vw, 1.3rem);
  margin-bottom: clamp(1.2rem, 4vw, 3.5rem);

  color: ${({ theme }) => theme.defColors.white};

  h3{
    margin-top: 2em;
    margin-bottom: 1.5em;
  }

  span{
    font-weight: bold;
  }


`;


export const PrivacyWrapper = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
/*   min-height: 80vh; */
  display: flex;
  flex-direction: column;
  padding: 2em;

  @media (min-width: ${({ theme }) => theme.device.m}){
    padding: 2em 5em;
  }
`;


