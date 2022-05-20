import logo from './logo.svg';
import {FormEvent } from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {incremented, doubleValue, addAmount} from './features/counter/counter-slice';

function App() {
  const count = useAppSelector(state => state.counter.value);
  const countDouble = useAppSelector(state => state.counter.double);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };
  const handleClickDouble = () => {
    dispatch(doubleValue());
  };

  // !!! I ASSUMED ERROR HANDLING IS NOT IMPLEMENTED TO KEEP THE EXAMPLE SIMPLE !!!

  // the type should have been implemented, i.e. instead of any:
  // FormEvent<HTMLFormElement>
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // -  better to always provide radix parameter, i.e.: parseInt(event.currentTarget[0].value, 10)
    //    because if the user manages to somehow enter any string which starts with 0x, the parseInt is
    //    gonna convert it to hexadecimal system
    // -  we also wanna use currentTarget (the element which the event is attached to)
    // -  we wanna cast the zeroth element of currentTarget to HTMLInputElement since this is an input
    const incrementNumber = parseInt((event.currentTarget[0] as HTMLInputElement).value);
    // const incrementNumber = parseInt((event.currentTarget[0] as HTMLInputElement).value, 10); // RADIX!!!
    dispatch(addAmount(incrementNumber));

    // PS it would be a better idea to use here a controlled component for the input text in combination with
    // onChange event and the useState hook because:
    // - it would result in easier typing
    // - it is gonna be the reactive way
  };

  return (
    <div className="App">
      <div className="App-container">
        <p>Hello Vite + React!</p>
        <p> Original counter button using Redux</p>
        <button type="button" onClick={handleClick}>
          count is: {count}
        </button>
        <p> Count to double </p>
        <button type="button" onClick={handleClickDouble}>
          double is: {countDouble}
        </button>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Number to sum:
            <input type="text" name="numberInput"/>
          </label>

          {/* using button with the type submit inside a form would be a much better option */}
          {/* input by definition suggests that it is editable, while button expresses a different clear purpose */}
          {/* button is more flexible in terms of styling (and can be styled without any edge cases) */}
          {/* button is more flexible in terms of markup - we can put some markup inside a button */}
          {/* may be a better solution in terms of SEO */}
          <input type="submit" value="Submit"/>
          <p>The result is: {count}</p>

        </form>
      </div>
    </div>
  );
}

export default App;
