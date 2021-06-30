import styled from 'styled-components';

export const Button = styled.button`

  background-color: transparent;
  border: 4px solid ${({ theme }) => theme.defColors.black};
  color:${({ theme }) => theme.defColors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  z-index: 10;
  background: rgba(255,255,255,.3);
  cursor: pointer;
  font-size: 12px;


&:hover {
  color: #272829;
}

&::before {
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

&:hover::before {
  transform: scaleX(1);
}
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}


`;