import { createSlice, nanoid } from "@reduxjs/toolkit";
export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    items: JSON.parse(localStorage.getItem("notes")) || [],
    search: "",
  },
  reducers: {
    addNotes: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("notes", JSON.stringify(state.items));
      },
      prepare: ({ note, color }) => {
        return {
          payload: {
            id: nanoid(),
            title: note,
            color: color,
          },
        };
      },
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    removeNote: (state, action) => {
      let index = state.items.findIndex((item) => item.id == action.payload);
      state.items.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
  },
});

export const itemSelector = (state) => state.items;

export const { addNotes, addSearch, removeNote } = noteSlice.actions;
export const filterSelector = (state) =>
  state.items.filter((note) => note.title.includes(state.search));
export const searchPicker = (state) => state.search;
export default noteSlice.reducer;
