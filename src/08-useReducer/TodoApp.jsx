

import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos'


export const TodoApp = () => {
  const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, pendingTodosCount, todosCount, handleDeleteDoneTodos } = useTodos();
  
  return ( 
  <>
    <h1>Todos: { todosCount } <small>Pendientes: { pendingTodosCount }</small></h1>
    <hr />
    
        { todosCount  === 0 ? '' : <button 
        className='btn btn-danger' 
        onClick={ handleDeleteDoneTodos } > Eliminar las tareas ya completadas 
      </button> 
          }
          
    <div className="row">
      <div className="col-7">
        { todosCount === 0 ? 'Por favor agrega una tarea' :   <TodoList 
          todos={ todos } 
          onDeleteTodo={ handleDeleteTodo }
          onToggleTodo={ handleToggleTodo }
        />
        }
      </div>           
          
            <div className="col-5">
              <h4>
                Agregar Tarea
              </h4>
                <hr />
                <TodoAdd 
                    onNewTodo={ handleNewTodo }/>
            </div>
          
    </div>
  </>
  )
}