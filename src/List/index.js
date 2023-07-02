import { Item, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTasks }) => (
  <ul className="section__item section__list">
    {tasks.map(task => (
      <Item key={task.id} hidden={hideDone && task.done}>
        <Button
          toggleDone
          onClick={() => toggleDoneTasks(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </ul>
);

export default Tasks;
