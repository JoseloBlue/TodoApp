import { TodoList } from "./TodoList";


export const todoReducer = ( initialState = [] , action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
                
        
        case '[TODO] Remove Done Todo':
            return initialState.filter( todo => !todo.done )
                
                
        // AÑadir otra acciopn para borrar los completados
            // /src/08-useReducer/todoReducer.js
            // return initialState.filter( todo => Crear condicion de filtrado );
            default: 
            return initialState;
    }
}

