import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./store/index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(actions.increment());
  };
  const handleDec = () => {
    dispatch(actions.decrement());
  };
  const handleAddValue = () => {
    dispatch(actions.addBy10(10));
  };
  const handleSubValue = () => {
    dispatch(actions.subBy5(5));
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <span>{counter}</span>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleAddValue}>Add Value By 10</button>
      <button onClick={handleSubValue}>Subtract Value By 5</button>
    </div>
  );
};

export default App;
