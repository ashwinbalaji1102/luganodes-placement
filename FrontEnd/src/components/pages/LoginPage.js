import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Alert from './Alert';
import {useState} from 'react';
import { useEffect } from 'react';


import Logo from "../../assets/images/luganodes.webp"
import MLogo from "../../assets/images/metamask.png"
import '../../App.css'

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [errorMM, setErrorMM] = useState(null);
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
        e.preventDefault();
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
                history.push({
                    pathname:'/dashboard',
                    state: email
                });
            } else {
                setError(resJson["message"]);
            }
        } catch (err) {
            console.log(err);
        }
       // console.log("Received Response: ",resJson);
    };

    const handleSubmitWallet = async (e) => {
        e.preventDefault();
        //console.log(window.ethereum);
        if (window.web3) {
        try {
            const selectedAccount = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => accounts[0])
            .catch(() => {
                throw Error("Please select an account");
            });
            history.push('/dashboard');    
        } catch (error) {
            setErrorMM("Wallet not found.");
        }
        } else {
        setErrorMM("Wallet not found.");
        }
    };

    return (
        <div className="text-center m-5-auto">
            <p><img src={Logo} alt="Luganodes"/></p>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>e-Mail</label><br/>
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
            <div className="text-center m-1-auto">
                <form className="web3_form" onSubmit={handleSubmitWallet}>
                    <p><button id="web3_btn" type="submit"><img src={MLogo} alt="Metamask" style={{width:"2em"}}/> Connect with MetaMask</button></p>
                    {errorMM && <Alert type="error" message={errorMM} />}
                </form>
            </div>
            <footer>
                <p>First time? <Link to="/register"><label className="general-links">Sign Up</label></Link>.</p>
            </footer>
        </div>
    )
}
