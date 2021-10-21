import { useState } from "react";



export default function InputForm() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);
    const [json, setJson] = useState(null);


    const handleOnSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${inputValue}`)
            .then(response => response.json())
            .then(json1 => setJson(json1))
            .catch(error => setError(error));
    }
    
    if (error !== null) {
        return <div>Failed to fetch!</div>
    }

    if (json === null) {
        return <div>Loading...</div>
    }    

    return (
        <form onSubmit={handleOnSubmit}>
        <label>
            GitHub username: <br></br>
            <input 
                name="text" 
                type="text" 
                placeholder="Search users"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </label>
        <button type="submit">Search</button>
    </form>
    )
} 