import logo from './logo.svg'
import './App.css'
import {useAppDispatch, useAppSelector} from './app/hooks'
import {incremented, doubleValue, addAmount} from './features/counter/counter-slice'

function App() {
const count = useAppSelector(state=>state.counter.value)
const countDouble = useAppSelector(state=>state.counter.double)
const dispatch = useAppDispatch()

const handleClick = () => {
  dispatch(incremented())
}
const handleClickDouble = () => {
  dispatch(doubleValue())
}

const handleSubmit=(event: any)=>{
  event.preventDefault();
  const incrementNumber = parseInt(event.target[0].value);
  dispatch(addAmount(incrementNumber))
}

  return (
    <div className="App">
      <div className="App-container">
      <p>Hello Vite + React!</p>
        <p> Original counter button using Redux</p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        <p> Count to double   </p>
        <button type="button" onClick={handleClickDouble}>
            double is: {countDouble}
          </button>
          <form className='form' onSubmit={handleSubmit}>
          <label>
            Number to sum:
          <input type="text" name="numberInput"/>
        </label>
        <input type="submit" value="Submit" />
        <p>The result is: {count}</p>
  
      </form></div>
    </div>
  )
}

export default App
