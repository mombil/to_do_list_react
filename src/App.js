import { useState } from "react";
import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
	{ content: "zjeść krupnik", done: true, id: 0 },
	{ content: "odrobić lekcję", done: false, id: 1 },
];

function App() {
	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone(hideDone => !hideDone);
	};

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
				body={<Tasks tasks={tasks} hideDone={hideDone} />}
			/>
		</Container>
	);
}

export default App;
