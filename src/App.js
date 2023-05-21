import Form from "./Form";
import Tasks from "./List";
import Buttons from "./Buttons";
import Section from "./section";
import Header from "./Header";
import Container from "./Container";

let tasks = [
	{ content: "zjeść krupnik", done: true },
	{ content: "odrobić lekcję", done: false },
];

let hideDoneTasks = false;

function App() {
	return (
		<Container>
			<Header 
      header={"Lista zadań"} 
      />

			<Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
      />

			<Section
				title="Lista zadań"
				extraHeaderContent={
					<Buttons 
          tasks={tasks} 
          hideDoneTasks={hideDoneTasks} 
          />
        }

				body={<Tasks 
          tasks={tasks} 
          hideDoneTasks={hideDoneTasks} 
          />
        }
			/>
		</Container>
	);
}

export default App;
