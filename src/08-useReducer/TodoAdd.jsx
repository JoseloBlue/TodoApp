import React, {useState} from 'react'
import { useForm } from '../hooks/useForm'


export const TodoAdd = ({ onNewTodo }) => {

    //cambiar nel valor del done
    const [done, setDone] = useState(false)

    const { onInputChange, reset, title, description, OnButtomChange} = useForm({
        title: '',
        description:'',
        done: '',
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( title.lenght <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: done,
            description: description,
            title: title,
            //Añadir el valor del done aqui!
        }
    onNewTodo(newTodo);
    reset();
    }



return (
    <form onSubmit={ onFormSubmit }>
        <input 
        required 
            type="text" 
            placeholder="Títutlo de la tarea"
            className="form-control"
            name="title"
            value={ title }
            onChange={ onInputChange }
        />
        <input
            className="form-control"
            placeholder="Descripcion de la tarea"
            name='description'
            type="text"
            value={description}
            onChange={onInputChange}
        />
        <div className='d-flex gap-3'>
            <button
                name='done'
                type='button'
                className='btn btn-dark mt-1'
                value={ done }
                onChange={ OnButtomChange }
                onClick={()=> {
                    setDone((done) => !done)
                }}
                
                >
                {
                    done === true ? 'Estado de la tarea: Hecho' : 'Estado de la tarea: Pendiente'
                }
            </button>
        
        </div>

        <button 
            type="submit"
            className="btn btn-primary mt-2"
        >
            Añadir
        </button>
        <button 
            type='reset'
            className='btn btn-primary mt-2 ms-2'
            onClick={ reset }
        >
            Reset
        </button>
            
        </form>
)
}
