import { useState } from "react";
import UserInfo from "../UserInfo";


export default function GitHubUserForm(props) {
    const [inputValue, setInputValue] = useState({ text: "" });
    console.log(props.value)
    const handleOnChange = (event) => {
        event.preventDefault();
        setInputValue({ text: event.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        UserInfo(inputValue.text);
    }

    return (
        <form onSubmit={handleOnSubmit}>
        <label>
            GitHub username: <br></br>
            <input 
                name="text" 
                type="text" 
                placeholder="Search users"
                value={inputValue.text}
                onChange={handleOnChange}
            />
        </label>
        <button type="submit">Search</button>
    </form>
    )
}
