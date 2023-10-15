import styled from "styled-components"

export default styled.input`
flex: 1 0;
padding: 10px;
margin-right: 15px;

@media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}) {
  flex: 1 1 100%;
  margin: 5px 0;
}
`;