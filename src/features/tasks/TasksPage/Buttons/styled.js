import { styled } from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;
