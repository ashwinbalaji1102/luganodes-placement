import React from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert';
import {useState} from 'react';
import { useEffect } from 'react';

import '../../App.css'

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (!isValidEmail(email) && email !== "") {
                setError('Invalid e-Mail.');
              } else {
                setError(null);
              }    
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
      }, [email])

    
    const handleChange = event => {
        setEmail(event.target.value);
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Welcome to Luganodes!</h2>
            <form action="/dashboard">
                <p>
                    <label>e-Mail Address</label><br/>
                    <input type="text" name="email" value={email} onChange={handleChange}/>
                    {error && <Alert type="error" message={error} />}
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Sign Up</Link>.</p>
            </footer>
        </div>
    )
}
