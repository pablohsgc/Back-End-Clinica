import React from 'react';
import {Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';

import './css/style.css'; 

const Agenda = (props) => {
  return (
    <div class="container">
        <div class="alert alert-info">
          Agendamento de Consulta
        </div>

        <Form>
          <div class="row">
              <div class="col-lg-8">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicNome">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="nome" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCPF">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control type="CRM" placeholder="" />
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-8">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="telefone" placeholder="" />
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEspecialidade">
                  <Form.Label>Especialidade Médica</Form.Label>
                  <Form.Control type="especialidade" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-6">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicNomeMedico">
                  <Form.Label>Nome do Médico</Form.Label>
                  <Form.Control type="nomeMedico" placeholder="" />
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-6">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicLogradouro">
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="logradouro" placeholder="Rua" />
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicNumero">
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="numero" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicComplemento">
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control type="complemento" placeholder="Casa/Apto" />
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicBairro">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="bairro" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCidade">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="cidade" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEstado">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="estado" placeholder="" />
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCEP">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="CEP" placeholder="" />
                </Form.Group>
              </div>
          </div>
         
        </Form>
        <div class="form-group col-md-12 text-center">
            <button id="CadastraConsulta" name="Agendar" class="btn btn-primary" type="Submit">Agendar</button>
            <button id="Cancelar" name="Cancelar" class="btn btn-secondary" type="Reset">Cancelar</button>
        </div>  
    </div>    
  );
};

export default Agenda;