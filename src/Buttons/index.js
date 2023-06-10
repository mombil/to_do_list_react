import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, finishAll }) =>
	tasks.length > 0 && (
		<div className="buttons">
			<button
				onClick={toggleHideDone} 
				className="buttons__button"
			>
				{hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
			</button>
			<button
				className="buttons__button"
				onClick={finishAll}
				disabled={tasks.every(({ done }) => done)}
			>
				Ukończ wszystkie
			</button>
		</div>
	);

export default Buttons;
