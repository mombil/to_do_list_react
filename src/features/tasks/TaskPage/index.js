import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaksById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaksById(state, id));

  return (
    <Container>
      <Header header="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <>
            {task ? <strong>Ukończono: </strong> : ""}
            {task ? (task.done ? "tak" : "nie") : ""}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
