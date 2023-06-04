import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTasks }) => (
	<ul className="section__item section__list">
		{tasks.map(task => (
			<li
				key={task.id}
				className={`list__item ${
					hideDone && task.done ? "list__item--hide" : ""
				}`}
			>
				<button
					onClick={() => toggleDoneTasks(task.id)}
					className="list__button list__button--done"
				>
					{task.done ? "✔" : ""}
				</button>
				<span className={`${task.done ? " list__text" : ""}`}>
					{task.content}
				</span>
				<button
					onClick={() => removeTask(task.id)}
					className="list__button list__button--remove"
				>
					🗑
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;
