import styled from 'styled-components';
import { BiDownArrowAlt } from "@react-icons/all-files/bi/BiDownArrowAlt";

const cubeSizeSmall = "20vw"
const cubeFaceSmall = "10vw"

const cubeSizeBig = "15vw"
const cubeFaceBig = "7.5vw"

export const HeroText = styled.section`
width: 100%;
height: 40%;
position: relative;
text-align: center;
letter-spacing: 8px;
justify-content: center;
align-items: center;
display: flex;
justify-content: flex-end;

@media (min-width: ${({ theme }) => theme.device.m}){
  position: absolute;
  justify-content: center;
}

  h1{
    color: ${({ theme }) => theme.defColors.white};
    font-size: 50px;
    text-align: right;
    margin-right: 5vw;
    display: flex;
    flex-direction: column;
    line-height: 1.8em;
    align-items: flex-end;
  }

  @media (min-width: ${({ theme }) => theme.device.m}) {
    h1{
      color: ${({ theme }) => theme.defColors.white};
      font-size:  clamp(2rem,8vw,10rem);
      text-align: center;
      flex-direction: row;
    }
  }

  span{
    color: ${({ theme }) => theme.defColors.black};
    margin-left: 30px;
  }
`

export const Cube = styled.div`
    height: ${cubeSizeSmall};
    perspective: 60rem;
    width: ${cubeSizeSmall};

    .cube__container {
      animation: rotationBox 20s linear infinite forwards;
      height: 100%;
      position: relative;
      transform: translateZ(-${cubeFaceSmall});
      transform-style: preserve-3d;
      width: 100%;
    }

    .cube__face {
      align-items: center;
      background-color: #eee;
      display: flex;
      justify-content: center;
      overflow: hidden;
      position: absolute;
      height: ${cubeSizeSmall};
      width: ${cubeSizeSmall};
    }

    .cube__face--front {
      transform: rotateY(0deg) translateZ(${cubeFaceSmall});
    }
    .cube__face--back {
      transform: rotateY(180deg) translateZ(${cubeFaceSmall});
    }
    .cube__face--left {
      transform: rotateY(-90deg) translateZ(${cubeFaceSmall});
    }
    .cube__face--right {
      transform: rotateY(90deg) translateZ(${cubeFaceSmall});
    }
    .cube__face--top {
      transform: rotateX(90deg) translateZ(${cubeFaceSmall});
    }
    .cube__face--bottom {
      transform: rotateX(-90deg) translateZ(${cubeFaceSmall});
    }


    .img__container {
      height: auto;
      min-height: 100%;
      object-fit: cover;
      width: 100%;
    }

    @media (min-width: ${({ theme }) => theme.device.m}) {
      height: ${cubeSizeBig};
      perspective: 60rem;
      width: ${cubeSizeBig};

      .cube__container {
        transform: translateZ(-${cubeFaceBig});
      }

      .cube__face {
        height: ${cubeSizeBig};
        width: ${cubeSizeBig};
      }

      .cube__face--front {
        transform: rotateY(0deg) translateZ(${cubeFaceBig});
      }
      .cube__face--back {
        transform: rotateY(180deg) translateZ(${cubeFaceBig});
      }
      .cube__face--left {
        transform: rotateY(-90deg) translateZ(${cubeFaceBig});
      }
      .cube__face--right {
        transform: rotateY(90deg) translateZ(${cubeFaceBig});
      }
      .cube__face--top {
        transform: rotateX(90deg) translateZ(${cubeFaceBig});
      }
      .cube__face--bottom {
        transform: rotateX(-90deg) translateZ(${cubeFaceBig});
      }
    
  
    }

    /* Animation ============================================================*/

@keyframes rotationBox {
  0% {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  25% {
    transform: rotate3d(0, 1, 1, 90deg);
  }
  50% {
    transform: rotate3d(1, 0, 1, 180deg);
  }
  75% {
    transform: rotate3d(1, 1, 0, 240deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}


`

export const CubeBox = styled.section`
      align-items: center;
      display: flex;
      height: 30vh;
      width: 100%;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 0;
      width: 130%;
      right: 0;

      @media (min-width: ${({ theme }) => theme.device.m}) {
        height: 70%;
        width: 50%;
        right: 0;
        bottom: 0;
        height: 60vh;
      }


`

export const HeroBox = styled.div`
    text-align: right;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

/*     background: rgba(255,255,255,0.15);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(4.4px);
    -webkit-backdrop-filter: blur(4.4px);
    border-radius: 10px;
    z-index: 1; */

    @media (min-width: ${({ theme }) => theme.device.m}) {

    }

`

export const Banner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 0;
  width: 100%;
  position: absolute;
  letter-spacing: 4px;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: 80%;
  }
  
p{
  color:${({ theme }) => theme.defColors.black};
  font-size:  clamp(1.1rem, 2vw, 1.8rem);
  margin-bottom: 70px;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    font-size: clamp(1.3rem,1.8vw,1.8rem);
  }
}

.main-heading {
  font-size: clamp(1.3rem, 2.8vw, 3rem);
  padding-bottom: 2rem;
  width: 100%;
  text-align: right;
  color:${({ theme }) => theme.defColors.white};
  font-weight: 100;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    font-size: clamp(1.5rem,2vw,2rem);
  }
}

.button-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.offer-button {
  background-color: transparent;
  border: 4px solid ${({ theme }) => theme.defColors.black};
  color:${({ theme }) => theme.defColors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1rem;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  background: rgba(255,255,255,.3);
}

@media (min-width: ${({ theme }) => theme.device.m}) {
  font-size: 1.5rem;
}

.offer-button:hover {
  color: #272829;
}

.offer-button::before {
  background-color: #eee;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: -1;
}

.offer-button:hover::before {
  transform: scaleX(1);
}


  @media (min-width: ${({ theme }) => theme.device.m}) {
    bottom: 0;
    width: 50%;
    height: 60%;

    .main-heading {
      width: 100%;
    }
    
  }

/*   @media (min-width: ${({ theme }) => theme.device.s}) {
    height: 100%;
    margin-left: 0;
    width: 100%;
  }
 */


`

export const Arrow = styled(BiDownArrowAlt)`
  color: ${({ theme }) => theme.defColors.black};
  font-size: 80px;
`



export const CubeSectionBox = styled.section`
min-height: 80vh;
width: 100%;
background: rgb(0,0,0);
background: ${({ theme }) => theme.defColors.heroBg};
position: relative;

@media (min-width: ${({ theme }) => theme.device.m}) {
  height: 100vh;
}

  &:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 45%;
    right: 0;
    top: 0;
    background: rgb(0,145,209);
    background: ${({ theme }) => theme.defColors.glassBg};
    border: solid 4px white;
    transform: translate(0, 100px);
  }

  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: 80vh;
    &:before{
      width: 50%;
      height: 100%;
      transform: translate(0, 0);

    }
  }

`