import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/luganodes.webp"
export default function Dashboard() {
    return (
        <div className="text-center">
            <p><img src={Logo} alt="Luganodes"/></p>
            <Link to="/login">
                <button className="primary-button">Log Out</button>
            </Link>
        </div>
    )
}
