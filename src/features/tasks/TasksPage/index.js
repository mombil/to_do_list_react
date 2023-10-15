import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import FetchExampleButton from "./FetchExapleButton";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header header={"Lista zadań"} />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<FetchExampleButton />}
        body={<Form />}
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;
