import React from 'react'
import { useAuth, logout } from '../AuthContext';
import { useNavigate, Link, Navigate } from 'react-router-dom';
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
            <div className="headertext">
                <h3>Hello, Welcome to <br /> Jesus Youth Ke College</h3>
                <p>Jesus Youth is an international Catholic movement that challenges young people to live a meaningful, creative and fulfilling life. </p>
            </div>

            <div className="scroll">
                <div className="eventcard" style={{
                    backgroundImage: `url(${Upimg})`,
                }}>
                    {/* <img src={Upimg} alt="" height='150px' /> */}

                </div>
                <div className="eventcard" style={{
                    backgroundImage: `url(${Upimg2})`,
                }}>
                    {/* <img src={Upimg} alt="" height='150px' /> */}

                </div>
                <div className="eventcard" style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1479107574602-b42882f52baa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}>


                </div>
            </div>







            <div className="eventmain">
                <img src={Upimg2} alt="" height="250px" width="100%" />
                <div className="eventmaint">
                    <h1>Jesus and ME </h1>
                    <p>Hey Juniors! Are you ready to kick off your college journey with a bang? Join us for JAM – Jesus And Me – an incredible day dedicated to fun, faith, and forging new friendships! Dive into a variety of exciting activities designed to uplift and inspire. Experience powerful moments of prayer and adoration, and discover the joy of connecting with Christ in a whole new way. This is your chance to start the year with a heart full of positivity and a spirit ready to soar. Keep an eye out for more details – this is one event you definitely don't want to miss! 🌟🙏🎶
                    </p>

                </div>

            </div>


        </div>
    )
}

export default home
