import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoForm(props) {
    //used to set the value state of the input
    const [input, setinput] = useState(""); 

    //sets the "input" value to what is being typed in the input
    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: uuidv4(),
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
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={props.resetList}>Reset</button>
        </form>
    )
}