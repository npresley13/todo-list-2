import React from 'react';

//Main Todo App
export function Todo(props) {
    return (
        <div className="todo-row">
            {props.todos.map(todo => (
                <div key={todo.id}>{todo.text}</div>
            ))}
        </div>
    )
}