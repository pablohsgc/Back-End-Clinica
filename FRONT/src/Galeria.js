import React from 'react';
import {Container } from 'reactstrap';
import img1 from './img/img1.jpg'; 
import img2 from './img/img2.jpg'; 
import img3 from './img/img3.jpg'; 
import img4 from './img/img4.jpg'; 
import img5 from './img/img5.jpg'; 
import img6 from './img/img6.jpg'; 
import './css/style.css'; 

const Galeria = (props) => {
  return (
    <div class="container">
        <div class="alert alert-info">
            Nossa Clínica
        </div>
            <div class="row">
                <div class="col-lg-4"> <img class="imagens-galeria" src={img1}/> </div>
                <div class="col-lg-4"> <img class="imagens-galeria" src={img2}/> </div>
                <div class="col-lg-4"> <img class="imagens-galeria" src={img3}/> </div>
            </div>
            <div class="row">
                <div class="col-lg-4"> <img class="imagens-galeria" src={img4}/> </div>
                <div class="col-lg-4"> <img class="imagens-galeria" src={img5}/> </div>
                <div class="col-lg-4"> <img class="imagens-galeria" src={img6}/> </div>
            </div>

    </div>
  );
};

export default Galeria;