import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { TodoComplete } from './TodoComplete';
 
export function TodoList() {
    const [todos, setTodos] = useState([]);
    const [completedTodo, setCompletedTodo] = useState([]);
    
    const addTodo = todo => {
        //checks to make sure todo has text in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        //updates todos array to include new todo
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const markTodoComplete = (id) => {
        let remainingArr = [...todos].filter(todo => todo.id !== id);
        let todoAddedToComplete = [...todos].filter(todo => todo.id === id);
        let completeArr = [...completedTodo, ...todoAddedToComplete];
        setTodos(remainingArr);
        setCompletedTodo(completeArr);
        completeArr = [];
        remainingArr = [];
        todoAddedToComplete = [];
    }

    const undoComplete = (id) => {
        let undoTodo = [...completedTodo].filter(todo => todo.id === id);
        const removeFromComplete = [...completedTodo].filter(todo => todo.id !== id);
        setTodos([...todos, ...undoTodo]);
        setCompletedTodo(removeFromComplete);
        undoTodo = [];
    }

    const resetList = (e) => {
        e.preventDefault();
        setTodos([]);
        setCompletedTodo([]);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <TodoForm onSubmit={addTodo} resetList={resetList}/>
            <Todo 
                todos={todos}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
                markTodoComplete={markTodoComplete}
            />
            <h2>Completed Tasks</h2>
            <TodoComplete 
                completedTodo={completedTodo}
                undoComplete={undoComplete} 
            />
        </div>
    )
}