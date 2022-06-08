import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        //checks to make sure todo has text in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todo={todos}
            />
        </div>
    )
}