import { useState } from "react";
import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

import { useTasks } from "./useTasks";

function App() {
	const [hideDone, setHideDone] = useState(false);
	
	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

	const {
		tasks,
		removeTask,
		toggleDoneTasks,
		finishAll,
		addNewTask,
	} = useTasks()

	

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
