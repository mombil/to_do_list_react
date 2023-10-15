import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function AuthorPage() {
  return (
    <Container>
      <Header header="O autorze" />
      <Section
        title="Paweł Brejnak"
        body={
          "Nazywam się Paweł mam 16 lat i uczęszczam do czwartej klasy techinkum o profilu technik informatyk W wolnym czasie lubie grać w gry komputerowe lub grać na pianinie."
        }
      />
    </Container>
  );
}

export default AuthorPage;
