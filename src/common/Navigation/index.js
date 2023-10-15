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
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink to="/author">O autorze</StyledNavLink>
      </ListItem>
    </UnorderedList>
  </StyledNavigation>
);

export default Navigation;
