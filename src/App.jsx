import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import SignUp from './pages/signup';
import Login from './pages/login';
import Main from './pages/main';
import { useAuth, logout } from './AuthContext';
import Admin from './pages/admin';
import Home from './pages/home'
import Nav from "./pages/nav"
import "./App.css"
import homepng from "./pages/css/home.png"
import logt from "./pages/css/power-off.png"
import inter from "./pages/css/inter.png"
import security from "./pages/css/security.png"
import Register from "./pages/register"
import Profile from "./pages/profile"
import { AuthProvider } from './AuthContext';

const App = () => {
 
  
  return (
    <AuthProvider>
    <Router>
      <div>
      <Routes >
      {/* <Route path="/" exact Component={Home} /> */}
        <Route path="/login"  Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/main" Component={Main}/>
        <Route path="/admin" Component={Admin}/>
        <Route path="/home" Component={Home}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/register" Component={Register}/>
        <Route path="/" element={<Navigate to="/login" />} />
        
      
      </Routes>
    <Nav/>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;
