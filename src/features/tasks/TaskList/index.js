import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectTasks,
  toggleDoneTasks,
  removeTask,
} from "../tasksSlice";
import { Item, Content, List, RemoveButton, ToggleDoneButton } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={hideDone && task.done}>
          <ToggleDoneButton onClick={() => dispatch(toggleDoneTasks(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
