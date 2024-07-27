import React from 'react'
import { useEffect, useState } from 'react';
import { useAuth, logout } from '../AuthContext';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import Rabbit from "./css/rabbit.png"
const profile = () => {

    const [userName, setUserName] = useState(null);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchUserName = async () => {
            if (currentUser) {
                try {
                    // Initialize Firestore
                    const db = getFirestore();

                    // User is signed in, get their uid
                    const uid = currentUser.uid;

                    // Reference to the user's document in Firestore
                    const userDocRef = doc(db, 'users', uid);

                    // Fetch the user document
                    const userDoc = await getDoc(userDocRef);

                    // Check if the document exists and extract the user's name
                    if (userDoc.exists()) {
                        const userName = userDoc.data().name; // Ensure your document has a "name" field
                        setUserName(userName);
                        console.log('User Name:', userName);
                    } else {
                        console.log('No such document!');
                    }
                } catch (error) {
                    console.error('Error fetching user document:', error);
                }
            } else {
                // No user is signed in
                console.log('No user is signed in');
            }
        };

        fetchUserName();
    }, [currentUser]);
    return (
        <div className='profile'>
            <div className="appbar center">
                <h1>Profile</h1>
            </div>
            <div className="profilepql">
                <img src={Rabbit} alt="" />
                <h2> {userName}</h2>
            </div>
          <fieldset>
            <legend> Message </legend>
            Teach me to do your will,
for you are my God;
may your good Spirit
lead me on level ground.
<br/>Psalm 143:10

          </fieldset>
          

        </div>
    )
}

export default profile
