import {
  ListItem,
  UnorderedList,
  StyledNavLink,
  StyledNavigation,
} from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <UnorderedList>
      <ListItem>
        <StyledNavLink activeClassName="active" to="/zadania">Zadania</StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink activeClassName="active" to="/author">O autorze</StyledNavLink>
      </ListItem>
    </UnorderedList>
  </StyledNavigation>
);

export default Navigation;
