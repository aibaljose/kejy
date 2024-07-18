import React from 'react'
import homepng from "./pages/css/home.png"
import { useAuth, logout } from './AuthContext';
import security from "./pages/css/security.png"
const layout = () => {
    const handleSignOut = async () => {
        try {
          await logout();
          // Call the signOut function from your auth.js file
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      };
    
    
      const openadmin = () => {
       
        if (userName == "core") {
          console.log("dsfsdf")
          window.open("/admin")
    
        }
      }
  return (
    <div>
       <div className="bottomnav">
        <div className="nav"> <img src={homepng} alt="" height="20px" />
          Home</div>
        {/* <div className="nav"> <img src={homepng} alt="" height="20px" />Gruop</div> */}

        <div className="nav" onClick={openadmin}><img src={security} alt="" height="20px" /> Admin</div>

        <div className="nav" onClick={handleSignOut}> <img src={homepng} alt="" height="20px" />Logout</div>
      </div>
    </div>
  )
}

export default layout
