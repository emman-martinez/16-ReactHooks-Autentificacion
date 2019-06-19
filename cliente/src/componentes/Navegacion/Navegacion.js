import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';

class Navegacion extends Component {

    iniciarSesion = () => {
        this.props.auth.login();
    } 

    cerrarSesion = () => {
        this.props.auth.logout();
    }

    render() {
        console.log(this.props.auth);
        // console.log(this.props.auth.isAuthenticated());
        // console.log(this.props.auth.getAccessToken());

        const { isAuthenticated } = this.props.auth;
        // console.log(isAuthenticated());

        let resultado;

        // ( isAuthenticated() ? resultado = <a onClick={this.cerrarSesion}>Cerrar Sesión</a> : resultado = <a onClick={this.iniciarSesion}>Iniciar Sesión</a> )

        if( isAuthenticated() ){
            resultado = <a onClick={this.cerrarSesion}>Cerrar Sesión</a>;
            console.log('Autenticado');
        } else {
            resultado = <a onClick={this.iniciarSesion}>Iniciar Sesión</a>;
            console.log('No Autenticado');
        }

        return(
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                {resultado}
            </nav>
        );   
    }
}

export default Navegacion;