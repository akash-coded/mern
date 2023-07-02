import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiUserDetails() {
    const { id } = useParams();
    const url = `https://reqres.in/api/users/${id}`;
    const [user, setUser] = useState({});

    async function fetchUserInfo() {
        return await axios.get(url).then((response) => {
            setUser(response.data.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    }

    useEffect(() => {
        fetchUserInfo();
    });

    return (
        <div>
            <h2>User Details</h2>
            <p><img src={user.avatar} alt="Avatar" /></p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default ApiUserDetails;