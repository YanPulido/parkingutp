// import React, { useContext } from 'react'
// import AuthContext from '../../context/AuthContext';
// import { useNavigate } from "react-router";
import React, { Component } from "react";
import axios from 'axios';

function APIcall1() {
   return axios.get('http://localhost:4000/api/')
}
function APIcall2() {
  return axios.get('http://localhost:4000/api/load-operations')
}

export default class Dashboard extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientDocument = this.onChangeClientDocument.bind(this);
    this.onChangeClientPhone = this.onChangeClientPhone.bind(this);
    this.onChangeClientStartDate = this.onChangeClientStartDate.bind(this);
    this.onChangeClientFinishDate = this.onChangeClientFinishDate.bind(this);
    this.onChangeClientPlaca = this.onChangeClientPlaca.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.onChangeclientesSelect = this.onChangeclientesSelect.bind(this);
    this.onChangeHoraIni = this.onChangeHoraIni.bind(this);
    this.onSubmitIngreso = this.onSubmitIngreso.bind(this);
    // Setting up state
    this.state = {
      name: '',
      document: '',
      phone: '',
      startsoat: '',
      finishsoat: '',
      placa: '',
      clientes: [],
      horaini : '',
      ClienteIngreso: '',
      ClientOperations : []
    }

  
  }

  

  onChangeclientesSelect(e) {
    this.setState({ ClienteIngreso: e.target.value })
  }

  onChangeHoraIni(e) {
    this.setState({ horaini: e.target.value })
  }

  componentDidMount(){
  
    Promise.all([APIcall1(), APIcall2()])
    .then(data => {
      this.setState({clientes:data[0].data});
      this.setState({ClientOperations:data[1].data})
    });

  

  }

 


  onChangeClientName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeClientDocument(e) {
    this.setState({ document: e.target.value })
  }

  onChangeClientPlaca(e) {
    this.setState({ placa: e.target.value })
  }

  
  onChangeClientPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeClientStartDate(e) {
    this.setState({ startsoat: e.target.value })
  }

  onChangeClientFinishDate(e) {
    this.setState({ finishsoat: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const clientObject = {
      name: this.state.name,
      document: this.state.document,
      phone: this.state.phone,
      startsoat: this.state.startsoat,
      finishsoat: this.state.finishsoat,
      placa: this.state.placa
    };
    
  axios.post('http://localhost:4000/api/create-client', clientObject)
       
    this.componentDidMount();
    this.setState({
      name: '',
      document: '',
      phone: '',
      startsoat: '',
      finishsoat: '',
      placa: ''
    });
  }


  onSubmitIngreso(e) {
    e.preventDefault()

    const IngresoObject = {
      clientes: this.state.ClienteIngreso,
      horaini: this.state.horaini,
      operacion : 1,
      id_cliente : this.state.ClienteIngreso,
    };
   
   axios.post('http://localhost:4000/api/create-ingreso-parking', IngresoObject)
    this.setState({
      horaini: '',
      ClienteIngreso: ''
    });
  }






  render() {
    return (
      <div>

      <main id="main">
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h3>Ingreso de cliente</h3>
            </div>
          
      
                <form onSubmit={this.onSubmit}  class="php-email-form">
                  <div class="row">
                    <div class="col-md-4 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        value={this.state.name} onChange={this.onChangeClientName} 
                        placeholder="Nombre del cliente"
                        required
                      />
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="number"
                        value={this.state.document} onChange={this.onChangeClientDocument} 
                        class="form-control"
                        placeholder="NRO de documento"
                        required
                      />
                    </div>
                    <div class="col-md-4 form-group">
                      <input
                        type="number"
                        value={this.state.phone} onChange={this.onChangeClientPhone} 
                        class="form-control"
                        placeholder="# de celular"
                        required
                      />
                    </div>
                  </div>
             

                  <div class="row">
                   
                    <div class="col-md-5 form-group mt-3 mt-md-0">
                      Fecha inicio vigencia del soat
                      <input
                        type="date"
                        value={this.state.startsoat} onChange={this.onChangeClientStartDate} 
                        class="form-control"
                        placeholder="Fecha inicio soat"
                        required
                      />
                    </div>
                    <div class="col-md-5 form-group mt-3 mt-md-0">
                      Fecha del vencimiento del soat
                      <input
                        type="date"
                        value={this.state.finishsoat} onChange={this.onChangeClientFinishDate} 
                        class="form-control"
                        placeholder="Fecha fin soat"
                        required
                      />
                    </div>
                    <div class="col-md-2 form-group mt-3 mt-md-0">
                      Placa vehículo
                      <input
                        type="text"
                        value={this.state.placa} onChange={this.onChangeClientPlaca} 
                        class="form-control"
                        placeholder="TEST-199"
                        required
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <br></br>
                    <button type="submit">Registrar cliente</button>
                    <br></br>
                  </div>
                </form>









              
                <div class="section-title">
              <h3>Ingreso al parqueadero</h3>
            </div>
        
            <form onSubmit={this.onSubmitIngreso}  class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                     Placa a ingresar
                     <select class="form-control" onChange={this.onChangeclientesSelect} >
                      <option value=''>Seleccione el cliente</option>         
                      {this.state.clientes.map(elemento=>(
                        <option  value={elemento._id}>{elemento.name} - {elemento.placa}</option>
                      ))}
                    </select>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      Hora inicio
                      <input
                        type="datetime-local"
                        
                        value={this.state.horaini} 
                        class="form-control"
                        onChange={this.onChangeHoraIni} 
                      />
                    </div>
                 
                  </div>
             

                  <div class="row">
                   
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                        Tipo de operación
                      <select class="form-control" disabled>
                      <option >Entrada</option>     
                    </select>
                    </div>
                  
               
                  </div>

                  <div class="text-center">
                    <br></br>
                    <button type="submit">Ingresar vehículo </button>
                    <br></br> <br></br>
                  </div>
                </form>


            <div class="section-title">
              <h3>Ingresos del parqueadero</h3>
            </div>



            <table class="table table-dark table-striped">
                  <thead>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Fecha hora ingreso</th>
                          <th scope="col">Fecha hora salida</th>
                          <th scope="col">Placa</th>
                          <th scope="col">Nombre cliente</th>
                          <th scope="col">Telefono cliente</th>
                          <th scope="col">Fecha inicio vigencia soat</th>
                          <th scope="col">Fecha fin soat</th>
                          <th scope="col">Minutos</th>
                          <th scope="col">Estado</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.state.ClientOperations.map((elemento, index) => (  
              <tr data-index={index}>  
                  <td>{elemento._id}</td>
                  <td></td>
                  <td>{elemento.horaini}</td>
                  <td></td>
                  <td>{elemento.id_cliente.placa}</td>
                  <td>{elemento.id_cliente.name}</td>
                  <td>{elemento.id_cliente.phone}</td>
                  <td>{elemento.id_cliente.startsoat}</td>
                  <td>{elemento.id_cliente.finishsoat}</td>
                  <td></td>
                
              
                  <td>
                    
                     <button  class="btn btn-danger">Dar salida</button>
                  </td>  
                  </tr>
                 ))}
                  </tbody>
                  </table>





              </div>
        </section>
      </main>
    </div>);
  }
}

// export default function Dashboard() {
//     const {handleAuth} = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogOut = (e) => {
//         e.preventDefault();
//         handleAuth(false);
//         navigate('/')
//     }

//     return (
//         <div>
//             <h1>Parking UTP</h1>
//             <button onClick={handleLogOut}>Cerrar Sesión</button>
//         </div>
//     )
// }
