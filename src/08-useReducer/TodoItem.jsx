import { Button } from 'bootstrap'
import React, { useState } from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <li className="list-group-item d-flex flex-column justify-content-between">                       
      <div className="input-group m-2">
        <div className="input-group-text">
          <input 
          className="form-check-input mt-0" type="checkbox" checked={todo.done} readOnly aria-label="Checkbox for following text span"
          onClick={ () => onToggleTodo( todo.id )}
          />
        </div>
        <span type="text" className="form-control" aria-label="span with checkbox">
          { todo.title } 
        </span>

        {
          todo.description !== '' && todo.description !== undefined
          ? (
            <button 
              className='btn btn-info' 
              type="button" 
              onClick={() => {
                setShowDescription((prev) => !prev)
              }}              
            >
              {
              showDescription === true ? 'Mostrar menos': 'Leer mas'
              }
            </button> 
          )
          : (<></>)
        }
        
        <button 
          className='btn btn-danger'
          onClick={ () => onDeleteTodo(todo.id) }
          >
          Borrar
        </button> 
      </div> {/* 👈 Checkbox - Titulo - botonees */}

        {
          showDescription === true
          ? (
          <div className='btn btn-light'>
            {todo.description }
          </div>
          )
          : (<></>)
        }
    </li>   
  )
}
