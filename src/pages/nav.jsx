import React from 'react'
import homepng from "./css/home.png"
import { useNavigate,Link ,Navigate } from 'react-router-dom';
import Rabbit from "./css/rabbit.png"

import logt from "./css/power-off.png"
import inter from "./css/inter.png"
import security from "./css/security.png"
import { useAuth, logout } from '../AuthContext';

const nav = () => {
    const handleSignOut = async () => {
        try {
          await logout();
          // Call the signOut function from your auth.js file
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      };

      const { currentUser } = useAuth();
      if(currentUser)
      console.log(currentUser.email)

    
      const openadmin = () => {
       
        if (currentUser.email == "core@ke.jy") {
          console.log("dsfsdf")
          window.open('/admin')
    
        }
    }


  return (
    <div>
        <div className="bottomnav">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/home"> <div className="nav"> <img src={homepng}  alt="" height="20px" />
        Home</div></Link>
       
        {/* <div className="nav"> <img src={homepng} alt="" height="20px" />Gruop</div> */}
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/main"> <div className="nav" ><img src={inter} alt="" height="20px" /> Intercession</div> </Link>
      
        
        <div className="nav" onClick={openadmin}><img src={security} alt="" height="20px" /> Admin</div>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/profile"> <div className="nav" ><img src="https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png" alt="" height="20px" />Profile</div> </Link>

        {/* <div className="nav" onClick={handleSignOut} > <img src={logt} alt="" height="20px" />Logout</div> */}
      </div>
    </div>
  )
}

export default nav
