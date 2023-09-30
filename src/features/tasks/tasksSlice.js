import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleDoneTasks: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks.splice(index, 1);
    },
    finishAll: state => {
      state.tasks = state.tasks.map(task => ({ ...task, done: true }));
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
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
