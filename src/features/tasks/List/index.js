import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleDoneTasks } from "../tasksSlice";
import { Item, Content, List, RemoveButton, ToggleDoneButton } from "./styled";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={hideDone && task.done}>
          <ToggleDoneButton onClick={() => dispatch(toggleDoneTasks(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => removeTask(task.id)}>🗑</RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
