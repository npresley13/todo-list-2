import React,{useState,useId} from "react";

export function TodoForm(props) {
    //used to set the value state of the input
    const [input, setinput] = useState(""); 
    
    //creates an id for individual inputs
    const id = useId(); 

    //sets the "input" value to what is being typed in the input
    const handleChange = (e) => {
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
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}