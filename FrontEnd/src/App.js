import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useState} from 'react';

// import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgotPassword'
import Dashboard from './components/pages/Dashboard'

import './App.css'

export default function App() {
    return (
        
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={ LoginPage } /> 
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/dashboard" component={ Dashboard } />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

const Footer = () => {
    return (
         <p className="text-center" style={ FooterStyle }>Designed by <a href="https://www.linkedin.com/in/ashwin-balaji-489607252/" target="_blank" rel="noopener noreferrer" className="general-links">Ashwin Balaji</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
}
