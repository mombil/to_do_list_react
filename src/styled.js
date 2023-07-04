import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  max-width: ${({ theme }) => theme.breakpoints.largeDevices};
  background-color: #eee;
  margin: auto;
  word-break: break-word;
  font-family: "Lato", sans-serif;
}

@media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
  body {
    max-width: calc(100% - 30px);
  }
}

`;
