import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaksContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    let contentTrimmed = newTaksContent.trim();
    if (!contentTrimmed) {
      return setNewTaskContent("");
    }

    dispatch(
      addTask({
        content: contentTrimmed,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    focusInput();
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
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
