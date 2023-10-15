import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectTasks,
  toggleHideDone,
  finishAll,
  selectAreTasksEmpty,
} from "../../tasksSlice";
import { StyledButtons } from "./styled";
import { Button } from "../styled";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    !areTasksEmpty && (
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
