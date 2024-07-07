import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import bg from "../assets/bg.png"
import "./css/mainj.css"
const Main = () => {
  const [count, setcound] = useState(0);
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState(null);
  const [data, setdata] = useState({});
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
            setdata(userName2);


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
    <div className='mianbody'>
      <div className="welcom">
        <p className='welp'>Welcome {userName} </p>
        <p>to Ke Jesus youth Family</p>
      </div>

      <div className="hcard">
        <div className="hcardg">
          <div className="count1">
            <h3>{data.holymass}</h3>
            <p>Holymass</p>
          </div>
          <div className="count1">
            <h3>{data.holymass}</h3>
            <p>Holymass</p>
          </div>
          <div className="count1">
            <h3>{data.holymass}</h3>
            <p>Holymass</p>
          </div>
        </div>
        <div className="hcardf">
          <div className="count1">
            <h3>{data.holymass}</h3>
            <p>Holymass</p>
          </div>
          <div className="count1">
            <h3>1000000</h3>
            <p>Holymass</p>
          </div>
          <div className="count1">
            <h3>{data.holymass}</h3>
            <p>Holymass</p>
          </div>
        </div>

      </div>

      <div className="vcard">
        <div className="updater">
          <div className="conrr">
            <h3>Holy Mass</h3>
            <p>1000</p>
          </div>
          <div className="btn">
            ADD
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Adoration</h3>
            <p>1000</p>
          </div>
          <div className="btn">
            ADD
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Hail Mary</h3>
            <p>1000</p>
          </div>
          <div className="btn">
            ADD
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Apostolic Creed</h3>
            <p>1000</p>
          </div>
          
          <div className="btn">
            ADD
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Mercy Rosary</h3>
            <p>1000</p>
          </div>
          <div className="btn">
            ADD
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Rsoary</h3>
            <p>1000</p>
          </div>
          <div className="btn">
            ADD
          </div>
        </div>


        <div className="updater">
          <div className="conrr">
            <h3>UPDATE</h3>
          </div>
         
        </div>
      </div>



    </div>
  );
};

export default Main;
