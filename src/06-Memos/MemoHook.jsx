import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter';


const heavyStuff = ( iterationNumber= 0 ) => {
    for (let i= 0; i< iterationNumber; i++ ) {
    }

    return `${ iterationNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

   const { counter, increment } = useCounter(10);
   const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (

    <>
    
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
        onClick={ () => increment() } >
            +1
        </button>

        <button
            onClick={() => setShow( !show ) }
        >
            show/Hide { JSON.stringify(show) }
        </button>
    
    </>
  )
}
