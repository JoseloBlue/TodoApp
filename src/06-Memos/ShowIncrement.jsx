import React from 'react'

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log('caca')

  return (
   
<button
   onClick={() => {
    increment();
   }}
>


    Incrementar
</button>
  )
}
)
