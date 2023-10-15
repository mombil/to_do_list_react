import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectHideDone,
  toggleDoneTasks,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import {
  Item,
  Content,
  List,
  RemoveButton,
  ToggleDoneButton,
  StyledLink,
} from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={hideDone && task.done}>
          <ToggleDoneButton onClick={() => dispatch(toggleDoneTasks(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
