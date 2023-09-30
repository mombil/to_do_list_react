import { StyledSection, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <h2>{title}</h2>
      {extraHeaderContent}
    </Header>
    <div>{body}</div>
  </StyledSection>
);

export default Section;
