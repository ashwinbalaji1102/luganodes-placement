import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your Password</h2>
            <h5>Enter your e-Mail Address </h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">e-Mail Address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send Password reset e-Mail</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Sign Up</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
