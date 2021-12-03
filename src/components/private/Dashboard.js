import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import { useNavigate } from "react-router";

export default function Dashboard() {
    const {handleAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        handleAuth(false);
        navigate('/')
    }

    return (
        <div>
            <h1>Parking UTP</h1>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
        </div>
    )
}
