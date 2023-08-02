import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/luganodes.webp"
export default function Dashboard() {
    return (
        <div className="text-center">
            <p><img src={Logo} alt="Luganodes" style={{padding:"2em"}}/></p>
            <form>
                <p>
                    Welcome to Luganodes Dashboard!    
                </p>
                
            </form>
            <div>
            <Link to="/login">
                <button className="primary-button">Log Out</button>
            </Link>
            </div>
            
        </div>
    )
}
