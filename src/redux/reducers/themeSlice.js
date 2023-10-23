import { createAction, createSlice, current } from "@reduxjs/toolkit";

// export const toggleTheme = createAction("theme/toggle");

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    toggleTheme: (state) => {
      console.log(current(state));
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

/* 
(builder) => {
    builder.addCase(toggleTheme, (state) => {
      console.log("in reducer to switch ***");
      console.log(current(state));
      state.value = state.value === "light" ? "dark" : "light";
    });
  },
*/
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
