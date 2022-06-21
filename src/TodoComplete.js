import React from 'react';

export function TodoComplete ({completedTodo, undoComplete}) {

    return (
        <div className='todo-row'>
            {completedTodo.map(todo => (
                <div className="single-todo" key={todo.id}>
                    {todo.text}
                    <div onClick={() => undoComplete(todo.id)}>undo</div>
                </div>
            ))}
        </div> 
    )
}