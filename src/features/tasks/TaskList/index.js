import { Item, Content, List, RemoveButton, ToggleDoneButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleDoneTasks }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={hideDone && task.done}>
        <ToggleDoneButton onClick={() => toggleDoneTasks(task.id)}>
          {task.done ? "✔" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>{task.content}</Content>
        <RemoveButton onClick={() => removeTask(task.id)}>🗑</RemoveButton>
      </Item>
    ))}
  </List>
);

export default TaskList;
