import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaksContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = event => {
    event.preventDefault();
    let contentTrimmed = newTaksContent.trim();
    if (!contentTrimmed) {
      return setNewTaskContent("");
    }
    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaksContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        autofocus
        placeholder="Co jest do zrobienia?"
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
