import React from 'react';
import {Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';

import './css/style.css'; 

const Cadastro = (props) => {
  return (
    <div class="container">
      <div class="alert alert-info">
        Cadastro de Funcionários
      </div>
    
        <div class="form-group col-md-12 text-center">
          <button id="cadastromedico" name="medico" class="btn btn-primary" type="Submit">Médico</button>
          <button id="cadastroOutro" name="outro" class="btn btn-secondary" type="Submit">Outro</button>
        </div>  

    </div>    
  );
};

export default Cadastro;