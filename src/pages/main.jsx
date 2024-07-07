import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import bg from "../assets/bg.png"
const Main = () => {
  const [count, setcound] = useState(0);
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState(null);
  const [holymass, setholymass] = useState({});
  const [adoration, setadoration] = useState(0);
  const [mercyrostary, setmercyrostary] = useState(0);
  const [rosary, setrosary] = useState(0);
  const [creed, setcreed] = useState(0);

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
          const userdof2 = doc(db, 'countupdate', 'count')

          // Fetch the user document
          const userDoc = await getDoc(userDocRef);
          const userDoc2 = await getDoc(userdof2);
          if (userDoc2.exists()) {
            const userName2 = userDoc2.data();
            setholymass(userName2);


          }
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

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const counter = () => {
    setcound(count + 1)
  }



  return (
    <div className='center'>
      {/* <img src={bg} alt="" height="300px" width="100%" /> */}

      <h1 className='jamt'>JESUS AND ME

        <h2 className='jamt2'>Welcome, {userName} to the Jesus youth family</h2>
      </h1>

      <div className='scrollarea'>
        <div className="contentscroll">
          <div className="cardmain"></div>
          <div className="cardmain"></div>
          <div className="cardmain"></div>
        </div>

      </div>
      <div className="counndercards">
        <div className="roundcard">Hailmary : {holymass.hailmary}</div>
        <div className="roundcard">Holymass : {holymass.holymass}</div>
        <div className="roundcard">Adoration : {holymass.adoration}</div>


      </div>


    </div>
  );
};

export default Main;
