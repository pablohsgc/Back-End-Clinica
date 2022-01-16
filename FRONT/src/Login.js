import React from 'react';
import {Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';

import './css/style.css'; 

const Login = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 alert alert-info">
           Login
        </div>
        <div class="col-lg-4"></div>
    </div>
        
        <Form class="form-login container" method="post" name="form-login">
          <div class="row">
            <div class="col-lg-4"></div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" class="input-login" name="email" required/>
                </Form.Group>

                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicSenha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="senha" placeholder="" class="input-login" name="senha" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4"></div>
          </div>
  
        </Form>
        <div class="form-group col-md-12 text-center">
            <button id="Logar" name="Logar" class="btn btn-primary" type="Submit">Logar</button>
            <button id="Cancelar" name="Cancelar" class="btn btn-secondary" type="Reset">Cancelar</button>
        </div>  
    </div>    
  );
};

export default Login;