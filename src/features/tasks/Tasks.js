import Form from "./Form";
import TaskList from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
  const { removeTask, finishAll } = useTasks();

  return (
    <Container>
      <Header header={"Lista zadań"} />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons finishAll={finishAll} />}
        body={<TaskList removeTask={removeTask} />}
      />
    </Container>
  );
}

export default Tasks;
