import { Div, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, finishAll }) =>
  tasks.length > 0 && (
    <Div>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Button>
      <Button onClick={finishAll} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </Button>
    </Div>
  );

export default Buttons;
