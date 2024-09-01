import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'joseloblue',
        email: 'joselo@gmail.com'
});

    const { username, email} = formState;

    const onInputChange= ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
    }

    useEffect( () => {

    }, [ formState ]);

    useEffect( () => {

    }, [ email ]);
    return (
    <>
        <h1>Formulario Simple</h1>
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

        {
            (username === 'joseloblue2') &&  <Message />
        }

    </>

)
}
