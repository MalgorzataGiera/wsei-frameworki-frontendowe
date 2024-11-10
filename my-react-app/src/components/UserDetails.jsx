import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(err => console.error("Error fetching user data", err));
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>
    );
};

export default UserDetails;
