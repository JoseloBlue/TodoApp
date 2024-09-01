import React from 'react'

export const Hijo = React.memo( ({ numero, incrementar }) => {


    return (
        <button
            className="btn btn-primary mb-3"
            onClick={ () => incrementar (numero)  }
        >
            { numero }
        </button>
    )
}
)
