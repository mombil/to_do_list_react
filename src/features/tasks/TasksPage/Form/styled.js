import { styled } from "styled-components";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}) {
    flex-wrap: wrap;
  }
`;


export const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondaryColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: 0.4s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: 767px) {
    flex-grow: 1;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
