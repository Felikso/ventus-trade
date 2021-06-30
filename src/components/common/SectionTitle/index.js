import styled from 'styled-components';

export const SectionTitle = styled.div`

  h4{
    text-transform: capitalize;
    display: inline-block;
    color: ${({ theme }) => theme.defColors.white};
    font-size: clamp(1.2rem, 3vw, 2.3rem);
    position: relative;

    &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 50%;
    height: 6px;
    background: ${({ theme }) => theme.defColors.white};
    transform: translate(0, -14px);
      }

  }

  ${({ small, theme }) =>
  small &&
  `
  h4{
    font-size: clamp(1.2rem, 3vw, 3.5rem);
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 50%;
      height: 4px;
      background: ${({ theme }) => theme.defColors.white};
      transform: translate(0, -14px);
        }
  }

  @media (min-width: ${({ theme }) => theme.device.m}){
    h4{
      font-size: clamp(1.5rem, 3vw, 2.5rem);
    }
  }
`
}




  ${({ secondary, theme }) =>
    secondary &&
    `
  text-align: right;
  h4{
    color: ${theme.colors.third}; 
  
    &::after {
        border-bottom: 8px solid ${theme.colors.secondary}; 
      }
  `
  }
}

  ${({ third, theme }) =>
    third &&
    `
    background: transparent;

    h4{
      color: ${theme.colors.primary}; 

      &::after {
          border-bottom: 8px solid ${theme.colors.third}; 
        }
    }

`}

  ${({ fourth, theme }) =>
    fourth &&
    `
  background: transparent;
  text-align: right; 
  h4{
    color: ${theme.colors.primary};


    &::after {
        border-bottom: 8px solid ${theme.colors.secondary}; 
      }
  }

  `}

  ${({ fifth, theme }) =>
    fifth &&
    `
background: transparent;
padding: 0;
width: auto;

h4{
  color: ${theme.colors.primary};


  &::after {
      border-bottom: 8px solid ${theme.colors.third}; 
    }
}

`}

${({ six, theme }) =>
    six &&
    `
background: ${theme.colors.third};
width: auto;
padding: 0;

h4{
color: ${theme.colors.primary};


&::after {
  border-bottom: 8px solid ${theme.colors.secondary}; 
}
}

`}
 
${({ productName, theme }) =>
    productName &&
    `
    background: ${theme.colors.secondary};
    width: auto;
    padding: 10px 5px;

h4{
color: ${theme.colors.primary};
font-size: clamp(1.2rem, 3vw, 2.3rem);


&::after {
  border-bottom: none; 
}
}

`}

`;
