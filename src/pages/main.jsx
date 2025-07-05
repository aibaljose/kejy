import React, { useEffect, useState } from 'react';
import { useAuth, logout } from '../AuthContext';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import bg from "../assets/bg.png"
import "./css/mainj.css"
import plusicon from "./css/plus.png"
import { useCountUp } from 'react-countup';
import homepng from "./css/home.png"
import security from "./css/security.png"
const Main = () => {
  const [count, setcound] = useState(0);
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState(null);
  const [data, setdata] = useState({});
  const [adoration, setadoration] = useState(0);
  const [mercyrostary, setmercyrostary] = useState(0);
  const [rosary, setrosary] = useState(0);
  const [creed, setcreed] = useState(0);
  const [hailmary, sethailmary] = useState(0);
  const [holymass, setholymass] = useState(0);





  useEffect(() => {


    const fetchUserName = async () => {
      if (currentUser) {
        try {
          // Initialize Firestore
          const db = getFirestore();

          // User is signed in, get their uid
          const uid = currentUser.uid;

          // Reference to the user's document in Firestore

          const userdof2 = doc(db, 'countupdate', 'count')

          // Fetch the user document

          const userDoc23 = onSnapshot(userdof2, (userDoc2) => {
            if (userDoc2.exists()) {
              const userName2 = userDoc2.data();
              setdata(userName2);


            }
          });
          const userDocRef = doc(db, 'users', uid);
          const userDoc = await getDoc(userDocRef);
          console.log(userDoc.data())
          // Check if the document exists and extract the user's name
          if (userDoc.exists()) {
            const userName = userDoc.data().name; // Ensure your document has a "name" field
            setUserName(userName);
            console.log('User Name:', userName);
          } else {
            console.log('No such document!');
          }
          return () => userDoc23();
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

  const openadmin = () => {

    if (userName == "core") {
      console.log("dsfsdf")
      window.open("/admin")

    }
  }

  async function fun1() {
    const db = getFirestore();
    const userRef = doc(db, 'countupdate', 'count');

    try {
      const maindata = await getDoc(doc(db, 'countupdate', 'count'));
      console.log((parseInt(maindata.data().holymass)))
      await updateDoc(userRef, {
        holymass: parseInt(maindata.data().holymass) + holymass,
        adoration: parseInt(maindata.data().adoration) + adoration,
        hailmary: parseInt(maindata.data().hailmary) + hailmary,
        creed: parseInt(maindata.data().creed) + creed,
        mercyrostary: parseInt(maindata.data().mercyrostary) + mercyrostary,
        rosary: parseInt(maindata.data().rosary) + rosary,

      });


      console.log('User data updated successfully');

      setholymass(0)
      setadoration(0)
      setcreed(0)
      sethailmary(0)
      setmercyrostary(0)
      setrosary(0)


    } catch (error) {
      console.error('Error updating user data:', error);
    }
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
            <h3>
              {data.holymass}


            </h3>

            <p>Holy Mass</p>
          </div>
          <div className="count1">
            <h3>{data.adoration}

            </h3>
            <p>Adoration</p>
          </div>
          <div className="count1">
            <h3>{data.creed}</h3>
            <p>Apostles Creed</p>
          </div>
        </div>
        <div className="hcardf">
          <div className="count1">
            <h3>{data.hailmary}</h3>
            <p>Hail Mary</p>
          </div>
          <div className="count1">
            <h3>{data.rosary}</h3>
            <p>Rosary</p>
          </div>
          <div className="count1">
            <h3>{data.mercyrostary}</h3>
            <p>Mercy Rosary</p>
          </div>
        </div>

      </div>

      <div className="vcard">
        <div className="updater">
          <div className="conrr">
            <h3>Holy Mass</h3>
            <p>{holymass}</p>
          </div>
          <div className="btn">
            <img onClick={() => setholymass(holymass + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Adoration</h3>
            <p>{adoration}</p>
          </div>
          <div className="btn">
            <img onClick={() => setadoration(adoration + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Hail Mary</h3>
            <p>{hailmary}</p>
          </div>
          <div className="btn">
            <img onClick={() => sethailmary(hailmary + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Apostles Creed</h3>
            <p>{creed}</p>
          </div>

          <div className="btn">
            <img onClick={() => setcreed(creed + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Mercy Rosary</h3>
            <p>{mercyrostary}</p>
          </div>
          <div className="btn">
            <img onClick={() => setmercyrostary(mercyrostary + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>
        <div className="updater">
          <div className="conrr">
            <h3>Rosary</h3>
            <p>{rosary}</p>
          </div>
          <div className="btn">
            <img onClick={() => setrosary(rosary + 1)} src={plusicon} alt="" height="30px" />
          </div>
        </div>


        <div onClick={fun1} className="updater1">
          <div className="conrr">
            <h3>UPDATE</h3>
          </div>

        </div>
      </div>



    </div>
  );
};

export default Main;
