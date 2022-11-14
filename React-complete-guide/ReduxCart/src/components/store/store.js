import { configureStore } from "@reduxjs/toolkit";

import ToggleReducer from "./toggle";

const store = configureStore({
  reducer: {
    toggle: ToggleReducer,
  },
});

export default store;
