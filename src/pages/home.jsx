import React from 'react'
import { useAuth, logout } from '../AuthContext';
import { useNavigate,Link ,Navigate } from 'react-router-dom';
import "./css/home.css"
import Upimg from "./css/image1.png"
import Upimg2 from "../assets/bg.png"
const home = () => {
    const { currentUser } = useAuth();
    if (!currentUser) {
        return <Navigate to="/login" />;
      }
    
  return (
    <div className='home'>
    <div className="eventcard">
        <img src={Upimg}alt="" height='100px' />
        <div className="upcome">
            <h1>JAM<span>  ( Coming soon)</span></h1>
            <p>Inital Program | May 18 2024</p>
        </div>
    </div>
    <div className="eventmain">
        <img src={Upimg2} alt="" height="250px" width="100%"/>
        <div className="eventmaint">
            <h1>Jesus and ME </h1>
        <p>എല്ലാവർക്കും സുഖമാണോ? അതോ class, exams, assignments ഒക്കെ കൊണ്ട് മടുത്ത് ഇരിക്കുവാണോ? എങ്കിൽ ആ മടുപ്പ് ഒക്കെക്കൂടി ഒരൊറ്റ ദിവസംകൊണ്ട് നമ്മുക്ക് അങ്ങ് മാറ്റിയാലോ☻? എങ്ങനെയാണെന്നല്ലേ?

៣ KE College Jesus Youth++ September 22nu JAM (Jesus And Me) എന്ന ഒരു one day programme നടത്തുന്നുണ്ട് നമ്മുടെ കോളേജിലെ First years ന് വേണ്ടി ഈശോയും സീനിയേഴ്സും നടത്തുന്ന പരിപാടിയാ ഇത്. താഴെയുള്ള ലിങ്കിലൂടെയോ, പോസ്റ്ററിലുള്ള qr ലൂടെയോ നിങ്ങൾക്ക് രജിസ്റ്റർ ചെയ്യാം കേട്ടോ ☻...അപ്പൊ എല്ലാരും ഉണ്ടാവില്ലേ അന്ന്? Let's celebrate together with *Jesus
</p>
           
        </div>

    </div>
 
    
    </div>
  )
}

export default home
