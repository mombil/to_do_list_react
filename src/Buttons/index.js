import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, finishAll }) =>
  tasks.length > 0 && (
    <StyledButtons>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Button>
      <Button onClick={finishAll} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  );

export default Buttons;
