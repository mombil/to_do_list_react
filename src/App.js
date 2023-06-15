import { useState } from "react";
import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
	const [hideDone, setHideDone] = useState(false);



	const [tasks, setTasks] = useState(() =>
		!!JSON.parse(localStorage.getItem("tasks"))
			? JSON.parse(localStorage.getItem("tasks"))
			: []
	);

	localStorage.setItem("tasks", JSON.stringify(tasks));

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const removeTask = id =>
		setTasks(tasks => tasks.filter(task => task.id !== id));

	const toggleDoneTasks = id =>
		setTasks(tasks =>
			tasks.map(task => {
				return task.id === id ? { ...task, done: !task.done } : task;
			})
		);

	const finishAll = () =>
		setTasks(tasks => tasks.map(task => ({ ...task, done: true })));

	const addNewTask = content => {
		setTasks(tasks => [
			...tasks,
			{
				content,
				done: false,
				id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
			},
		]);
	};

	return (
		<Container>
			<Header header={"Lista zadań"} />

			<Section
				title="Dodaj nowe zadanie"
				body={<Form addNewTask={addNewTask} />}
			/>

			<Section
				title="Lista zadań"
				extraHeaderContent={
					<Buttons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
						finishAll={finishAll}
					/>
				}
				body={
					<Tasks
						tasks={tasks}
						hideDone={hideDone}
						removeTask={removeTask}
						toggleDoneTasks={toggleDoneTasks}
					/>
				}
			/>
		</Container>
	);
}

export default App;
