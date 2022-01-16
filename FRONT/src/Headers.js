import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.js'; 
import './Galeria.js'; 
import './Endereco'; 
import './Cadastro'; 
import './Agenda.js'; 
import './Login.js'; 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Clínica Viver Bem</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="Home.js" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Galeria.js">Galeria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Endereco.js" >Adicionar Endereço</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Agenda.js">Agendar Consulta</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Cadastro.js">Cadastro Funcionário</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Button variant="secondary" className="mx-2" href="Login.js">Login</Button>
            </Navbar>
        </div>
    );
}


export default Headers;