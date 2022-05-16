// file for logic

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
  double: number;
};

//initial state of our application
const initialState: CounterState = {
  value: 0,
  double: 1,
};
//createSlice creates actionCreator automatically
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      return {
        ...state,
        value: state.value + 1,
      };

      // Current suggestion from Redux doc (problems with inmutab concept of Redux)
      /*   incremented(state){
        state.value++
    } */
    },
    doubleValue(state) {
      return {
        ...state,
        double: state.double * 2,
      };
    },
    addAmount(state, { payload: incrementNumber }) {
      console.log(incrementNumber);
      return {
        ...state,
        value: state.value + incrementNumber,
      };
    },
  },
});

export const { incremented, doubleValue, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
