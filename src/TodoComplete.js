import React from 'react';

export function TodoComplete ({completedTodo}) {

    return (
        <div>
            {completedTodo.map(todo => (
                <div className="single-todo" key={todo.id}>
                    {todo.text}
                </div>
            ))}
        </div> 
    )
}