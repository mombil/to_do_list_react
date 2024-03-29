import { styled } from "styled-components";

export default styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 15px;
  margin: 0;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
  transition: 0.4s;

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.disabledColor};
  }
`;
