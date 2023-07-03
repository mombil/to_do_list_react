import { Item, Button, Content, List } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTasks }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={hideDone && task.done}>
        <Button $toggleDone onClick={() => toggleDoneTasks(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
