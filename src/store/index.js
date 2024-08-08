// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

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
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
