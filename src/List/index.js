import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
	<ul className="section__item section__list">
		{tasks.map(task => (
			<li key={task.id}
				className={`list__item ${
					hideDoneTasks && task.done 
          ? "list__item--hide" 
          : ""}`
        }
			>
				<button className="list__button list__button--done">
					{task.done ? "✔" : ""}
				</button>
				<span className={`${
          task.done 
          ? " list__text" 
          : ""}`}>
					  {task.content}
				</span>
				<button className="list__button list__button--remove">
          🗑
        </button>
			</li>
		))}
	</ul>
);

export default Tasks;
