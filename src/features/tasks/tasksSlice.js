import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleDoneTasks: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex(task => task.id === id);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex(task => task.id === id);
      tasks.splice(index, 1);
    },
    finishAll: ({tasks}) => {
      tasks.forEach((task) => task.done = true)
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleDoneTasks,
  removeTask,
  finishAll,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export default tasksSlice.reducer;
