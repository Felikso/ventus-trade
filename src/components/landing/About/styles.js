import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';


/* Features Section */
export const FeaturesImg = styled(GatsbyImage)`

@media (min-width: ${({ theme }) => theme.device.l}){

/*   width: 100%;
  height: 200px;

  &:last-child{
    height: 500px;
  }
 */
}

`
export const FeaturesContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  margin: 1em auto;
  width: 95%;
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.device.l}){

  }

  &:last-child{
    direction: ltr;
  }


  p{
/*     padding: 1em; */
    color: ${({ theme }) => theme.defColors.white};
  }

  p:first-child{
    color: ${({ theme }) => theme.defColors.black};
  }
`;

export const FeaturesBox = styled.div`
  display: flex;
  background: inherit;
  border-radius: 2px;
  overflow: hidden;
  background: rgba(255,255,255,0.15);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  backdrop-filter: blur(4.4px);
  -webkit-backdrop-filter: blur(4.4px);
  border-radius: 10px;
  flex-direction: column-reverse;
  margin: 2em auto;


  @media (min-width: ${({ theme }) => theme.device.l}) {
    width: calc(100% - 50% - 8px);
    margin: unset;
    border: solid 4px ${({ theme }) => theme.defColors.white};
    border-radius: 0px;
    justify-content: space-between;
    &:last-child{
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      direction: rtl;
/*       text-align: left; */
      height: 100%;
    }

    &:first-child{
      flex-direction: column;
    }
`;


export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
/*   padding: 2em; */

  @media (min-width: ${({ theme }) => theme.device.l}) {
    flex-direction: row;
    flex-flow: wrap;
/*     padding: 2em 5em; */
  }



`;


/* About us */

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  font-size:clamp(0.9rem, 1vw, 1.3rem);
  margin-bottom: clamp(1.2rem, 4vw, 3.5rem);

  p{
    color: ${({ theme }) => theme.defColors.white};
  }

`;


export const AboutWrapper = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
/*   min-height: 80vh; */
  display: flex;
  flex-direction: column;
  padding: 2em;
`;


