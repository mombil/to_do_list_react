import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaksContent, setNewTaskContent] = useState("");

  const onFormSubmit = event => {
    event.preventDefault();
    let contentTrimmed = newTaksContent.trim();
    if (!contentTrimmed) {
      return setNewTaskContent("");
    }
    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaksContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        autofocus
        placeholder="Co jest do zrobienia?"
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
