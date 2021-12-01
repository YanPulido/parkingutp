import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext';

export default function Dashboard() {
    const {handleAuth} = useContext(AuthContext);

    const handleLogOut = () => {
        handleAuth(false);
    }

    return (
        <div>
            <h1>Parking UTP</h1>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
        </div>
    )
}
