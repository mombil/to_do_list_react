import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ finishAll }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
console.log(hideDone)
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button onClick={finishAll} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </StyledButtons>
    )
  );
};

export default Buttons;
