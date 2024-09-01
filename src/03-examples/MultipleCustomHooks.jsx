import { useCounter, useFetch } from '../hooks/arachivoDeBarril';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCards } from './PokemonCard';


export const MultipleCustomHooks = () => {

  const { counter, decrement, increment} = useCounter(1);

   const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    

  return (
    <>
        <h1>Información de Pokemon</h1>
        <hr />

        {isLoading 
        ? <LoadingMessage/> 
      : (
      <PokemonCards 
       id={ counter }
      name={ data.name }
      sprites={ [
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
      ]
      }
       />
      )
      }

        <h2>{ data?.name }</h2>

        <button onClick={ () => counter > 1 ? decrement() : null }>
            anterior
        </button>

        <button onClick={() =>  increment() }>
            siguiente
        </button>
    </>
  )
}
