import { useState } from 'react';


export const useForm = ( initialForm = {}) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    // const { username, email, pasword } = formState;


    const onInputChange= (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    const reset = () => {
        setFormState( initialForm );
    }

    const OnButtomChange= (event) =>{
        const {name, value } = event.target
        setFormState({
            ...setFormState,
            [ name ]: value
        });
    }
    return {
        ...formState,
        OnButtomChange,
        onInputChange,
        reset,
    }
}
