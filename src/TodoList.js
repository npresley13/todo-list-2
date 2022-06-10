import React, {useState} from 'react';
import { TodoForm } from './TodoForm';

export function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        //checks to make sure todo has text in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        //updates todos array to include new todo
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }
    console.log(todos);
    return(
        <div>
            <h1>To Do List</h1>
            <TodoForm onSubmit={addTodo}/>
            <div className="todo-row">
                {todos.map(todo => (
                    <div key={todo.text}>{todo.text}</div>
                ))}
            </div>
        </div>
    )
}