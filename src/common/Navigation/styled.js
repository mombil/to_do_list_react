import styled from "styled-components";
import { NavLink } from "react-router-dom/";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: 0px;
`;

export const ListItem = styled.li`
  display: inline-block;
  color: white;
  margin: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;

export const UnorderedList = styled.ul`
  text-align: center;
  margin: 0;
`;
