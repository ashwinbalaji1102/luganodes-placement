import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alert from './Alert';
import {useState} from 'react';
import { useEffect } from 'react';


import Logo from "../../assets/images/luganodes.webp"
import '../../App.css'

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const history = useHistory();

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

    
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    }

    const handleChangePassword = event => {
        setPassword(event.target.value);
    } 

    let handleSubmit = async(e) => {
        console.log("1. handleSubmit");
        //event.preventDefault();
        e.preventDefault();
        console.log(email);
        console.log(password);
        let resJson = "";
        try {
            let body = JSON.stringify({
                email: email,
                password: password
                })
            console.log(body);
            let res = await fetch("http://localhost:8080/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });
            
            resJson = await res.json();

            if (res.status === 200) {
                setEmail("");
                setPassword("");
                history.push('/dashboard');
            } else {
                setError(resJson["message"]);
            }
        } catch (err) {
            console.log(err);
        }
        console.log("Received Response: ",resJson);
    };
    
    return (
        <div className="text-center m-5-auto">
            <p><img src={Logo} alt="Luganodes"/></p>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>e-Mail Address</label><br/>
                    <input type="text" name="email" value={email} onChange={handleChangeEmail}/>
                    {error && <Alert type="error" message={error} />}
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={password} onChange={handleChangePassword} required/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register"><label className="general-links">Sign Up</label></Link>.</p>
            </footer>
        </div>
    )
}
