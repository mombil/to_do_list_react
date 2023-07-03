import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { theme } from "./theme";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styled";

function App() {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleDoneTasks={toggleDoneTasks}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
