import {React, useContext } from 'react'
import AuthContext from '../../context/AuthContext';

export const Admin = () => {

  const {handleAuth} = useContext(AuthContext);

  const handleSubmit = (e) => {
      e.preventDefault();
      handleAuth(true);
      
  }
  
  return (
    <div>


  
      
      <main id="main">
      
       
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h3>Registro de cliente</h3>
            </div>
          
                <form action="#" method="#" class="php-email-form">
                  <div class="row">
                    <div class="col-md-4 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Nombre del cliente"
                        required
                      />
                    </div>
                    <div class="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="NRO de documento"
                        required
                      />
                    </div>

                    <div class="col-md-4 form-group">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="# de celular"
                        required
                      />
                    </div>
                  </div>
             

                  <div class="row">
                    
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Fecha inicial soat"
                        required
                      />
                    </div>

                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Fecha fin soat"
                        required
                      />
                    </div>
                  </div>

            
                  <div class="text-center">
                    <button type="submit">Guardar datos</button>
                  </div>
                </form>
              </div>
         
        </section>
      </main>
     
   
    </div>
  );
}
