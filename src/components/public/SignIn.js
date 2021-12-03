import {React, useContext } from 'react'
import AuthContext from '../../context/AuthContext';

export const SignIn = () => {

    const {handleAuth} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAuth(true);
        
    }
    
    return (

                
        <div>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" />
                <br/>
                <input type="password" placeholder="Constraseña" />
                <br/>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}
