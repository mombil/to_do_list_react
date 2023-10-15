import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { Button } from "../styled";

const FetchExampleButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <Button disabled={isLoading} onClick={() => dispatch(fetchExampleTasks())}>
      {isLoading ? "Trwa ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default FetchExampleButton;
