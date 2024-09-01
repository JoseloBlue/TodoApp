import { useCounter } from '../hooks/useCounter';


export const CounterWithHoooks = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (

    <>
      <h1>Counter With Hook: { counter }</h1>
      <hr />

      <button onClick = {() => increment(1)} >+1</button>
      <button on onClick={reset}>reset</button>
      <button onClick={() => decrement(1)}>-1</button>
    </>
  )
}
