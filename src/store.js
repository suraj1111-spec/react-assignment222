import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer.js";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
