import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';



export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, pasword , reset} = useForm({
        
            username: '',
            email: '',
                pasword: ''
  
    });

    //const { username, email, pasword } = formState;
    

 
  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input type="text"
        placeholder="Username"
        name= "username" 
        value= { username }
        onChange={ onInputChange }
        />

        <input type="email"
        placeholder="josiacuevas692@gmail.com"
        name="email"
        value= { email }
        onChange={ onInputChange }
         />

          <input type="Pasword"
        placeholder="contraseña"
        name="pasword"
        value= { pasword }
        onChange={ onInputChange }
         />

         <button onClick={ reset }>Reset</button>


        {
            (username === 'joseloblue2') &&  <Message />
        }

    </>

)
}
