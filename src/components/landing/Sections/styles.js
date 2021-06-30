import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const ImageBox = styled.div`
  height: 150px;
  display: flex;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: auto;
/*     width: 30%; */
  }

`;

export const Content = styled.div`
/*   height: 60%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;

  @media (min-width: ${({ theme }) => theme.device.m}) {
 /*    height: 100%; */
    width: 70%;
  }

  p{
    line-height: 2em;
    color: ${({ theme }) => theme.defColors.white};
  }
}
`;

export const SectionCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 2em auto;
  height: 100%;

background: inherit;
border-radius: 2px;
overflow: hidden;
background: rgba(255,255,255,0.15);
box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
backdrop-filter: blur(4.4px);
-webkit-backdrop-filter: blur(4.4px);
border-radius: 10px;
flex-direction: column-reverse;

@media (min-width: ${({ theme }) => theme.device.m}) {
  flex-direction: row;
  width: 40%;
  margin: -20px;
  height: 100%;
}



`;

export const SectionsBox = styled.div`
/*   background: red; */
  display: flex;

  position: relative;
  justify-content: space-around;
  flex-flow: wrap;
/*   padding: 2em; */
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    flex-direction: row;
    height: 90%;
/*     padding: 2em 5em; */
  }
}
`;


export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
  display: flex;
  flex-direction: column;
  padding: 2em;


  @media (min-width: ${({ theme }) => theme.device.m}) {
    min-height: 60vh;
    flex-direction: column-reverse;
    /* padding: 2em 5em;  */
  }

`;

