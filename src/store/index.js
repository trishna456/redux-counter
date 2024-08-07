import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  //for dispatching actions - automatically creates unique action identifiers for our different reducers
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/*
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
   
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};
*/

// const store = createStore(counterReducer); or createStore(counterSlice.reducer) and to combine multiple reducers using standard redux use combineReducers()

const store = configureStore({
  //behind the scene, configureStore will merge all the reducers into one big reducer
  reducer: counterSlice.reducer,
});

export const conunterActions = counterSlice.actions;

export default store;
