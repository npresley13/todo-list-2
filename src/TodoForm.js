import {React,useState,useId} from "react";

export function TodoForm() {
    const [input, setinput] = useState(""); //used to set the value state of the input
    const id = useId(); //creates an id for individual inputs

    const createTodo = (e) => {
        setinput(e.target.value)
    }

    const addTodo = () => {

    }
    
    return (
        <form>
            <input id={id} type="text" placeholder="Add a Todo" value={input} onChange={createTodo}></input>
            <button onSubmit={addTodo}>Submit</button>
        </form>
    )
}