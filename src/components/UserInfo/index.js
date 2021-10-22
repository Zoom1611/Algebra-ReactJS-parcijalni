import { useEffect, useState } from "react";

export default function UserInfo(props) {
    const [user, setUser] = useState(null);
    const [userError, setUserError] = useState(null);
    
    const [repo, setRepo] = useState([null]);
    const [repoError, setRepoError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.value}`)
            .then(response => response.json())
            .then(json => setUser(json))
            .catch(error => setUserError(error));

        fetch(`https://api.github.com/users/${props.value}/repos`)
            .then(response => response.json())
            .then(json => setRepo(json))
            .catch(error => setRepoError(error));
    }, [props.value]);
    
    if (userError !== null || repoError !== null) {
        return <div>Failed to fetch!</div>
    }

    if (user === null || repo === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <img src={user.avatar_url} alt="Profile pic" />
            <div>{user.name}</div>
            <div>BIO:{user.bio}</div>
            <div>LOCATION:{user.location}</div>
            <div>REPOSITORIES:</div>
            <ul>
                {repo.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}