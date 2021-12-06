import {React, useContext } from 'react'
import AuthContext from '../../context/AuthContext';


// export default class SignIn extends Component {
    
//     constructor(props){
//         // Initialize dad constructor
//         super(props);
//         // Binding functions
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         // Component State definition
//         this.state = {
//             usermail = '',
//             password = ''
//         }

//     }
    
//     handleClick(e){
//     }

//     async handleChange(e){
//         if(e.target.name == 'usermail'){
//             await this.setState({
//                 usermail = e.target.value
//             })
//         }else{
//             await this.setState({
//                 password = e.target.value
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label>Nombre de Usuario</label>
//                     <input type='text' name='useremail' onChange={this.handleChange} />
//                     <label>Contraseña</label>
//                     <input type='password' name='password' onChange={this.handleChange} />
//                     <br/>
//                     <button onClick={this.handleClick}>Iniciar sesión</button>

//                 </form>
                
//             </div>
//         )
//     }
// }


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
                <label>Usuario registrado</label><br/>
                <input type="text" placeholder="Correo electrónico" name='usermail' />
                <br/><br/>
                <label>Ingrese su contraseña</label>
                <br/>
                <input type="password" placeholder="Constraseña" name='password'/>
                <br/><br/>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}
