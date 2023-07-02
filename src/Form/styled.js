import { styled } from "styled-components";

export const StyledForm = styled.form`
  background-color: white;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  flex: 1 0;
  padding: 10px;
  margin-right: 15px;

  @media (max-width: 767px) {
    flex: 1 1 100%;
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: 0.4s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 40%);
  }

  @media (max-width: 767px) {
    flex-grow: 1;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
