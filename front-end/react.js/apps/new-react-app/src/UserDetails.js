import { useParams } from "react-router-dom";

export default function UserDetails({ users }) {
    const { id } = useParams();

    return (
        <div>
            <h2>User Details</h2>
            <p>First Name: {users[id - 1].firstName}</p>
            <p>Last Name: {users[id - 1].lastName}</p>
            <p>Email: {users[id - 1].email}</p>
            <p>Password: {users[id - 1].password}</p>
        </div>
    );
}