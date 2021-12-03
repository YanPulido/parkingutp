<<<<<<< HEAD
/* eslint-disable jsx-a11y/no-redundant-roles */
//eslint-disable jsx-a11y/anchor-is-valid
//eslint-disable jsx-a11y/no-redundant-roles
//eslint-disable-next-line
import { useContext, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthRouter } from './routes/AuthRouter';
import { UnauthRouter } from './routes/UnauthRouter';
import AuthContext from './context/AuthContext';

function App() {

  const {auth} = useContext(AuthContext)

  return (
    <div className="App">
      {auth? <AuthRouter/>: <UnauthRouter/>}
    </div>
  );
}

export default App;




=======
>>>>>>> origin
