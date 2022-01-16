import React from 'react';
import {Container } from 'reactstrap';
import logotipo from './img/logotipo.png'; 
import './css/style.css'; 

const Home = (props) => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="alert alert-info">
                    Clínica Viver Bem
                </div>
                <p>
                    Queremos que você seja bem atendido e se sinta confortável, com dedicação total dos médicos e de toda nossa equipe.
                </p>
                
                <div class="alert alert-info">
                    Nossa Missão
                </div>
                <p>
                    Oferecer aos pacientes a gestão de saúde e bem estar com excelência, humanidade e empatia, 
                    contribuindo para a melhoria da qualidade de vida.
                </p>
                <div class="alert alert-info">
                    Nossos Valores
                </div>
                <p>
                    <ul>
                        <li>Excelência;</li>
                        <li>Humanização;</li>
                        <li>Empatia;</li>
                        <li>Inovação;</li>
                        <li>Sustentabilidade;</li>
                    </ul>
                </p>
            </div>

            <div class="col-lg-4">
                <img src={logotipo}/>
            </div>
        </div>
    </div>
  );
};

export default Home;