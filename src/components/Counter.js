// import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { conunterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(conunterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(conunterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', payload: 5 });
    dispatch(conunterActions.increase(5)); //{type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(conunterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  //similar to useSelector
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  //similar to useDispatch
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
