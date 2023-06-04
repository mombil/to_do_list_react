import { useState } from "react";
import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
	const [hideDone, setHideDone] = useState(false);

	const [tasks, setTasks] = useState([
		{ content: "zjeść krupnik", done: true, id: 1 },
		{ content: "odrobić lekcję", done: false, id: 2 },
	]);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const removeTask = id =>
		setTasks(tasks => tasks.filter(task => task.id !== id));

	const toggleDoneTasks = id =>
		setTasks(tasks =>
			tasks.map(task => {
				if (task.id === id) {
					return { ...task, done: !task.done };
				}
				return task;
			})
		);

	return (
		<Container>
			<Header header={"Lista zadań"} />

			<Section title="Dodaj nowe zadanie" body={<Form />} />

			<Section
				title="Lista zadań"
				extraHeaderContent={
					<Buttons
						tasks={tasks}
						hideDone={hideDone}
						toggleHideDone={toggleHideDone}
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
