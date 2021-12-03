import React, { Component } from "react";
import axios from 'axios';

export default class Admin extends Component {

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

    // Setting up state
    this.state = {
      name: '',
      document: '',
      phone: '',
      startsoat: '',
      finishsoat: '',
      placa: ''
    }
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
      .then(res => console.log(res.data)); 

    this.setState({
      name: '',
      document: '',
      phone: '',
      startsoat: '',
      finishsoat: '',
      placa: ''
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
                  </div>
                </form>
              </div>
         
        </section>
      </main>
     
   
    </div>);
  }
}
