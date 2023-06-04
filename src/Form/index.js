import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
	const [newTaksContent, setNewTaskContent] = useState("");

	const onFormSubmit = event => {
		event.preventDefault();
		addNewTask(newTaksContent.trim());
		setNewTaskContent("");
	};

	return (
		<form className="section__item form" onSubmit={onFormSubmit}>
			<input
				value={newTaksContent}
				onChange={({ target }) => setNewTaskContent(target.value)}
				className="form__input"
				type="text"
				autofocus
				placeholder="Co jest do zrobienia?"
			/>
			<button className="form__button">Dodaj zadanie</button>
		</form>
	);
};

export default Form;
