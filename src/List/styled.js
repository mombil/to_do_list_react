import { styled, css } from "styled-components";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 15px;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px #ddd solid;
  margin-bottom: 10px;
  padding: 5px;
  word-break: break-word;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryColor};
  margin-right: 5px;
  width: 30px;
  height: 30px;
  padding: 1px;
  transition: 0.4s;
`;

export const ToggleDoneButton = styled(Button)`
  background-color: hsl(120, 100%, 25%);

  &:hover {
    background-color: hsl(120, 100%, 35%);
  }

  &:active {
    background-color: hsl(120, 100%, 40%);
  }
`;

export const RemoveButton = styled(Button)`
  background-color: hsl(0, 100%, 50%);

  &:hover {
    background-color: hsl(0, 100%, 60%);
  }

  &:active {
    background-color: hsl(0, 100%, 65%);
  }
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      text-align: justify;
    `}
`;
