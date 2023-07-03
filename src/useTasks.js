import { useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
		() => JSON.parse(localStorage.getItem("tasks")) || []
	);

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

    return {
        tasks, 
        removeTask, 
        toggleDoneTasks, 
        finishAll, 
        addNewTask}
}