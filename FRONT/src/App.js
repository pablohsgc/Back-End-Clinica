import React from "react";
import Headers from './Headers';
import Home from './Home';
import Galeria from'./Galeria'; 
import Endereco from './Endereco';
import Cadastro from './Cadastro';
import CadastroMedico from './CadastroMedico';
import CadastroOutro from './CadastroOutro';
import Login from './Login';
import Agenda from'./Agenda'; 
import Footer from './Footer';

import './css/style.css'; 
import Form from 'react-bootstrap/Form';
<><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"crossorigin></script>
  <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>
  <script>var Alert = ReactBootstrap.Alert;</script></>


function App (props){
  return(
    <div>
      <Headers />
      <Home/>
      <Footer />
      <Galeria />
      <Endereco />
      <Cadastro />
      <CadastroMedico />
      <CadastroOutro />
      <Login />
      <Agenda />

    </div>
  );
}

export default App;
