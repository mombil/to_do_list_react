import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleDoneTasks,
    finishAll,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header header={"Lista zadań"} />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            finishAll={finishAll}
          />
        }
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleDoneTasks={toggleDoneTasks}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
