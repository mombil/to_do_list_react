import { StyledSection, Header, Content } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <h2>{title}</h2>
      {extraHeaderContent}
    </Header>
    <Content>{body}</Content>
  </StyledSection>
);

export default Section;
