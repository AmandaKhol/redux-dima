// file for logic

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

    // ASK TO EXPLAIN THIS CODE FIRST
    // the object in the argument is a destructuring of the argument
    // incrementedNumber here is an alias which is redundant
    // the function above reads easier:
    REFACTORED_amountAdded(state, action: PayloadAction<number>) {
      return {
        ...state,
        value: state.value + action.payload
      }
    },
    // Redux docs strongly recommend to model actions as event, not setters this would
    // lead to a specific naming convention, see this docs:
    // https://redux.js.org/style-guide/#model-actions-as-events-not-setters
    // in this amountAdded is a better name than addAmount
    // KEEP IN MIND: this name is gonna be used for your action creators by redux-toolkit, see
    // the "export const" at the bottom of this file
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
