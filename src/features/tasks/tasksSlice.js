import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    isLoading: false,
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
    finishAll: ({ tasks }) => {
      tasks.forEach(task => (task.done = true));
    },
    fetchExampleTasks: state => {
      state.isLoading = !state.isLoading;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.isLoading = !state.isLoading;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleDoneTasks,
  removeTask,
  finishAll,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectIsLoading = state => selectTasksState(state).isLoading;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;
