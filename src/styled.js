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
  background-color: #eee;
  word-break: break-word;
  font-family: "Lato", sans-serif;
}

main {
  max-width: ${({ theme }) => theme.breakpoints.largeDevices};
  margin: auto;
}

@media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}) {
  main {
    max-width: calc(100% - 30px);
  }
}

`;
