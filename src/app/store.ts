// our store file

import { configureStore } from "@reduxjs/toolkit"; //wrapper of the 'old version' store
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
