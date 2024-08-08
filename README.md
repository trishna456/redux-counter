# Redux Auth Counter Application

This project is a simple React application demonstrating key Redux concepts using the Redux Toolkit. The app includes user authentication and a counter feature, designed to help developers practice and understand the fundamental principles of state management with Redux.

## Features

1. **Authentication**:
   - Users can log in and log out, with the authentication state managed by Redux.
   - Components and navigation links render conditionally based on the user's authentication status.

2. **Counter**:
   - Increment and decrement the counter.
   - Increase the counter value by a specific payload (e.g., by 5).
   - Toggle the visibility of the counter.

## Key Redux Concepts Used

### 1. **Redux Toolkit**
Redux Toolkit is the recommended way to write Redux logic. It provides a set of tools that simplify Redux development by including commonly used libraries and best practices.

### 2. **Slices**
A slice is a collection of Redux reducer logic and actions for a single feature of your application. In this app, there are two slices: `authSlice` and `counterSlice`.

- **authSlice**:
  - Manages the authentication state (`isAuthenticated`).
  - Contains actions `login` and `logout` to update the authentication state.

- **counterSlice**:
  - Manages the counter state (`counter` and `showCounter`).
  - Contains actions `increment`, `decrement`, `increase`, and `toggleCounter` to update the counter state.

### 3. **State Management**
Redux manages the global state of your application in a centralized store. This store holds the state tree of your application, and any component can access any part of this state.

- **Initial State**: Both `authSlice` and `counterSlice` define initial states.
- **Reducers**: Functions that handle state changes based on actions dispatched to the store.

### 4. **Actions and Reducers**
Actions are payloads of information that send data from your application to your Redux store. They are the only source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store.

- **Actions**: Defined within the slices (e.g., `login`, `logout`, `increment`, `decrement`).
- **Reducers**: Functions inside slices that handle the state transition based on the action type.

### 5. **Selectors**
Selectors are functions that take the current state as an argument and return a piece of that state. They are used inside React components to get the current value of the state.

- **useSelector**: A hook provided by React-Redux to extract data from the Redux store state using a selector function.

### 6. **Dispatch**
Dispatch is a method used to send actions to the Redux store. Components can dispatch actions to the store to trigger state changes.

- **useDispatch**: A hook provided by React-Redux to get the `dispatch` function from the Redux store, enabling components to dispatch actions.

### 7. **Store Configuration**
The Redux store is configured using the `configureStore` function from Redux Toolkit. This function sets up the store with good default settings, including combining multiple reducers.

```javascript
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
