import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn JavaScript",
        completed: true,
      },
      {
        id: "2",
        title: "Learn React",
        completed: false,
      },
      {
        id: "3",
        title: "Have a life!",
        completed: false,
      },
      {
        id: "4",
        title: "Learn Redux",
        completed: true,
      },
      {
        id: "5",
        title: "Watch Besiktas match in Vodafone Park",
        completed: true,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;

      const item = state.items.find((item) => item.id === id);

      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;

      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
});

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
