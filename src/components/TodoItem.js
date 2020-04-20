import React from "react";

const TodoItem = ({todo, handlerToggle, handlerDelete, handlerEdit}) => {
    return(
        <li className='todo__item'>
            <span className='todo__left'>
                <input
                    className='todo__checkbox'
                    type="checkbox"
                    id={todo.id}
                    checked={todo.completed === true ? 'checked': ''}
                    onChange={()=> {
                        handlerToggle(todo.id)
                    }}
                />
                <label
                    className={todo.completed === true ? 'todo__label done': 'todo__label'}
                    htmlFor={todo.id}>{todo.text}
                </label>
            </span>
            <span className='todo__right'>
                <button
                    className='todo__edit'
                    onClick={()=> {
                        handlerEdit(todo.id)
                    }}

                >
                    Edit
                </button>
                <button
                    className='todo__close'
                    onClick={()=> {
                        handlerDelete(todo.id)
                    }}>
                  &times;
                </button>
            </span>
        </li>
    )
}

export default TodoItem;
