import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiUserPortal() {
    // Fetch users data from reqres.in API
    const url = "https://reqres.in/api/users?page=2";
    const [users, setUsers] = useState([]);

    const fetchInfo = async () => {
        return await axios.get(url).then((response) => {
            setUsers(response.data.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div>
            <h1>Welcome to the reqres.in User Portal</h1>
            <p>Reqres users can see this page</p>
            <table border="1" className="Center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ApiUserPortal;