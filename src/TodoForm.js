import React,{useState,useId} from "react";

export function TodoForm(props) {
    const [input, setinput] = useState(""); //used to set the value state of the input
    const id = useId(); //creates an id for individual inputs

    const createTodo = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: id,
            text: input
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a Todo" 
                value={input} 
                name="text"
                onChange={createTodo}
            />
            <button>Submit</button>
        </form>
    )
}