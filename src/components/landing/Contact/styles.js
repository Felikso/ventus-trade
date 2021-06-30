import styled from 'styled-components';
import { SiMailDotRu } from "@react-icons/all-files/si/SiMailDotRu";
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { ReactComponent as Logo } from 'assets/illustrations/vt-logo.svg'

export const LogoBg = styled(Logo)`
  fill: ${({ theme }) => theme.defColors.lightWhite};
  position: absolute;
  height: 40%;


  top: 0;
  right: 0;
  transform: translate(-10px, 10px);

  @media (min-width: ${({ theme }) => theme.device.m}){
    height: 60%;
    top: unset;
    bottom: 0;
    left: 0;
    transform: translate(2em, -2em);
  }



`


export const ContactBox = styled.div`
  font-size: clamp(1rem, 2vw, 3rem);
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size: clamp(1rem, 2vw, 3rem);
  }
`

export const BrandInfoSection = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 35% 65%;
    position: relative;

    @media (min-width: ${({ theme }) => theme.device.m}){
      grid-template-columns: 65% 35%;
    }

    @media (min-width: ${({ theme }) => theme.device.xl}){
      grid-template-columns: 25% 75%;
    }

    h4{
      margin-bottom: 1em;
    }

    h5{
      color: ${({ theme }) => theme.defColors.white};
      font-size: clamp(1rem, 2.8vw, 2.3rem);
      line-height: 2em;
      font-weight: 100;
    }

/*     &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      right: 0;
      top: 0;
      background-image: url(${LogoBg});
      background-size: contain;
      background-position: left top;
      background-repeat: no-repeat;
      z-index: 1;
    } */
`;

export const ColumnOne = styled.div`
    text-align: right;

    h5{
      margin-right: 10px;
    }
    h4{
      font-size: clamp(1rem, 3.4vw, 4rem);
      color: ${({ theme }) => theme.defColors.white};
      font-weight: 100;
      margin-right: 10px;
      margin-top: 10px;
    }
`

export const ColumnTwo = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  color: ${({ theme }) => theme.defColors.black};
  h4{
    z-index: 1;
    font-size: clamp(1rem, 3.4vw, 4rem);
    color: ${({ theme }) => theme.defColors.black};
    font-weight: 100;
    margin-right: 10px;
    margin-top: 10px;
  }

  h5{
    z-index: 1;
    color: ${({ theme }) => theme.defColors.black};
    margin-right: 10px;
  }

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
  z-index: -1;
}

@media (min-width: ${({ theme }) => theme.device.m}) {
/*   height: 80vh;
  padding: 2em 5em; */
  &:before{
/*     width: 50%; */
/*     width: 25%;
    height: 100%;
    transform: translate(0, 0); */

  }
}
`


/* Contact Secttion */

export const ContactInfoSection = styled.section`
  width: 100%;
  margin-bottom: 2em;

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.defColors.white};
  }

`;

export const MailIcon = styled(SiMailDotRu)`
  font-size: 26px;
  margin-right: 10px;
  color: ${({ theme }) => theme.defColors.white};

  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size: 36px;
  }
`

export const PhoneIcon = styled(BiPhoneCall)`
  font-size: 26px;
  margin-right: 10px;
  color: ${({ theme }) => theme.defColors.white};

  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size: 36px;
  }
`

/* Wrapper */

export const ContactWrapper = styled.div`
  background: ${({ theme }) => theme.defColors.sectionsBg};
  position: relative;
  padding: 2em;
  padding-right: 0;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.device.xl}){
    display: flex;
    flex-direction: row-reverse;
  }
`;


