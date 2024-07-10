import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const db = getFirestore();
    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(db, 'users');
            const usersSnapshot = await getDocs(usersCollection);
            const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersList);
        };

        fetchUsers();
    }, []);

    return (
        <div className='cardcontaineradmin'>
            <div className="headh1">
            <h1>Registered Students</h1>
            </div>
            
            {users.map(user => (
                <div className="admincard" key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.course}</p>
                    <p>Year: {user.year}</p>
                    <p>{user.email}</p>
                    <p>{user.date}</p>
                    <p>{user.number}</p>
                    
                </div>

            ))}


            
        </div>
    );
};

export default UsersList;