import { configureStore } from "@reduxjs/toolkit"; //Iimport ang configure Store API gikan sa Redux Toolkit
import todoReducer from "./slices/todoSlice"; //Iimport ang todoReducer gikan sa todoSlice

// variable store, inside sa object naay isa ka key kanang reducer then diha nimo ibutang tanan nimo reducer
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
