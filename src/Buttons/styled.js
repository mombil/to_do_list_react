import { styled } from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoits.mediumDevices}) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 15px;
  margin: 0;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
  transition: 0.4s;

  &:hover {
    color: hsl(180, 100%, 30%);
  }
  &:active {
    color: hsl(180, 100%, 40%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.disabledColor};
  }
`;
