import React from 'react';
import {Container } from 'reactstrap';
import './css/style.css'; 
import Form from 'react-bootstrap/Form';

const Endereco = (props) => {
  return (
    <div class="container">
        <div class="alert alert-info">
          Adicionar endereço
        </div>
        <p>
        Os endereços adicionados aqui, serão armazenados em nossa base de endereços e usados para melhor atendê-los.
        </p>

        <Form class="form-endereco" action="/Endereco" method="POST">
          <div class="row">
              <div class="col-lg-6">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicLogradouro">
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control type="text" class="form-control" name="logradouro" placeholder="Rua" required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicNumero">
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="text" class="form-control" name="numero" placeholder="" required />
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicComplemento">
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control type="text" class="form-control" name="complemento" placeholder="Casa/Apto" required/>
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicBairro">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="text" class="form-control" name="bairro" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCidade">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="text" class="form-control" name="cidade" placeholder=""required />
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEstado">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="text" class="form-control" name="estado" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-2">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCEP">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="text" class="form-control" name="cep" id="inputZip" required/>
                </Form.Group>
              </div>
          </div>
        </Form>
        <div class="form-group col-md-12 text-center">
            <button id="Cadastrar" name="Cadastrar" class="btn btn-primary" type="Submit">Cadastrar</button>
            <button id="Cancelar" name="Cancelar" class="btn btn-secondary" type="Reset">Cancelar</button>
        </div>  
    </div>    
  );
};

export default Endereco;