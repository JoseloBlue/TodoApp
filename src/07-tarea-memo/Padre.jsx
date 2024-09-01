import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {



    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
      (valor ) => {
        setValor( (l) => l + valor );
      },
      [],
    );
    

//     const incrementar = ( num ) => {
//     setValor( valor + num )
// }


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            <div className='d-flex flex-column'>
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            </div>
            
        </div>
    )
}
