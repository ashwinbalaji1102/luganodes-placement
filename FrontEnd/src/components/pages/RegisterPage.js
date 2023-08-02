import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react';
import Alert from './Alert';
import { useEffect } from 'react';

import '../../App.css'
import Logo from "../../assets/images/luganodes.webp"
export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
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
        }, 1000)
    
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
            let res = await fetch("http://localhost:8080/signup", {
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
            <h3>Create your Account</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>e-Mail</label><br/>
                    <input type="email" name="email" required onChange={handleChangeEmail}/>
                    {error && <Alert type="error" message={error} />}
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={handleChangePassword}/>
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
            <p>Already a user? <Link to="/login" className="general-links">Login</Link></p>
            </footer>
        </div>
    )

}
