import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';

class Navegacion extends Component {
    render() {
        console.log(this.props.auth.getAccessToken());
        return(
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
            </nav>
        );   
    }
}

export default Navegacion;