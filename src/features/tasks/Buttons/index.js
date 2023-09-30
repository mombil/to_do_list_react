import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, finishAll } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <StyledButtons>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button
          onClick={() => dispatch(finishAll())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </StyledButtons>
    )
  );
};

export default Buttons;
