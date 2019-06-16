import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {

    leerDatos = (e) => {
        // console.log(e.target.value);

        // ***** Término de búsqueda
        const termino = e.target.value;

        // ***** Enviamos por props
        this.props.busqueda(termino);
    }

    render() {
        return(
            <form className="buscador" action="">
                <input type="text" placeholder="Búsqueda" onChange={this.leerDatos}/>
            </form>
        );
    }
}

export default Buscador;