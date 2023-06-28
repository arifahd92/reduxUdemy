import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function incrementByFive() {
    dispatch({ type: "incrementByFive" });
  }
  function decrementByFive() {
    dispatch({ type: "decrementByFive" });
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <button onClick={incrementByFive}>incrementByFive</button>
      <button onClick={decrementByFive}>decrementByFive</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
