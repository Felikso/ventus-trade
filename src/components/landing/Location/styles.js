import styled from 'styled-components';
import { RiMapPinFill } from "@react-icons/all-files/ri/RiMapPinFill";
import { RiMapPinLine } from "@react-icons/all-files/ri/RiMapPinLine";
import { GatsbyImage } from "gatsby-plugin-image"

export const MapImage = styled(GatsbyImage)`
margin-bottom: 5em;
border: 4px solid ${({ theme }) => theme.defColors.white};
`

export const AdressPinBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PinPrimary = styled(RiMapPinLine)`
  color: ${({ theme }) => theme.defColors.blueLight};
  z-index: 1;
  font-size: 26px;
  margin-right: 10px;


  @media (min-width: ${({ theme }) => theme.device.m}){
    margin: 10px;
    font-size: 50px;
  }
`
export const PinSecondary = styled(RiMapPinFill)`
  color: ${({ theme }) => theme.defColors.blueDark};
  z-index: 1;
  font-size: 26px;
  margin-right: 10px;

  @media (min-width: ${({ theme }) => theme.device.m}){
    margin: 10px;
    font-size: 50px;
  }
`

export const AdressContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;


/*   @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr;
  } */

  a{
    z-index: 1;
    color: unset;
  }
`;


export const AdressBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  justify-content: center;
  align-items: center;


  h5{
    color: ${({ theme }) => theme.defColors.white};
    text-align: right;
    font-size: clamp(0.8rem, 2vw, 1.3rem);
    line-height: 2em;
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.device.m}){
      font-size: clamp(1rem, 2vw, 1.3rem);
    }
  }
`;


export const LocationContent = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4em;
  position: relative;

  &:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background: rgb(0,145,209);
    background: ${({ theme }) => theme.defColors.glassBg};
    border: solid 4px white;
  }

  p{
    font-size: clamp(1rem, 2vw, 1.3rem);
    line-height: 2em;
    padding: 1em 0;
    z-index: 1;
    color: ${({ theme }) => theme.defColors.white};
  }

  h4{
/*     padding-right: 5em; */
  }

`;


export const MapBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em;

    p{
      color: ${({ theme }) => theme.defColors.white};
      font-size: clamp(1rem,3vw,1.8rem);
      text-align: center;
    }

  
`;


export const LocationWrapper = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
/*   min-height: 80vh; */
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr;
  }


  
`;

