import { createSlice } from "@reduxjs/toolkit";

let initialState = { toggle: true };

const Toggle = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    show(state) {
      state.toggle = true;
    },
  },
});

export const viewToggle = Toggle.actions;

export default Toggle.reducer;
