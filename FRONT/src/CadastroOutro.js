import React from 'react';
import {Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';

import './css/style.css'; 

const CadastroOutro = (props) => {
  return (
    <div class="container">
        <div class="alert alert-info">
           Cadastro de Funcionários
        </div>

        <Form class="form-cadastroOutro" action="/cadastroOutro" method="POST">
        <div class="row">
              <div class="col-lg-8">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicNome">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" class="form-control" name="nome" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicCPF">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control type="text" class="form-control" name="cpf" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-8">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" class="form-control" name="email" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="text" class="form-control" name="telefone" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
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
                  <Form.Control type="text" class="form-control" name="numero" placeholder="" required/>
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
                  <Form.Control type="text" class="form-control" name="cidade" placeholder="" required/>
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
                  <Form.Control type="text" class="form-control" name="cep" placeholder="" required/>
                </Form.Group>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicDataInicioContratoTrabalho">
                  <Form.Label>Data de Início do Contrato de Trabalho</Form.Label>
                  <Form.Control type="text" class="form-control" name="dataContrato" placeholder="" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicSalario">
                  <Form.Label>Salário</Form.Label>
                  <Form.Control type="text" class="form-control" name="salario" placeholder="R$" required/>
                </Form.Group>
              </div>
              <div class="col-lg-4">
                <Form.Group className="mb-3" class="alert alert-info" controlId="formBasicSenha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="text" class="form-control" name="senhaHAsh" placeholder="" required/>
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

export default CadastroOutro;