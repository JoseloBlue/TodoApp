import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    const [ todos, dispatch] = useReducer( todoReducer, initialState, init );
    const todosCount = todos.length;

    
      
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }

      dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
      
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = ( id ) => {
      dispatch({
        type:'[TODO] Toggle Todo',
        payload: id
      });
    }

    const handleDeleteDoneTodos = () => {
      dispatch({
        type:'[TODO] Remove Done Todo'
      });

    
    
    }
  
  return {
    todos, 
    handleDeleteTodo, 
    handleNewTodo, 
    handleToggleTodo,
    handleDeleteDoneTodos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    
  }
}
