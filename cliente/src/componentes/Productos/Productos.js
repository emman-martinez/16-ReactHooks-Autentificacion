import React, { Component } from 'react';
import Producto from './../Producto/Producto';
import Buscador from './../Buscador/Buscador';
import './Productos.css';

class Productos extends Component {
    render() {
        return(
            <div className="productos">
                <h2>Nuestros Productos</h2>
                { /* Componente: Buscador */ }
                <Buscador
                            busqueda={this.props.busquedaProducto}
                ></Buscador>
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto => (
                        <Producto
                                    key={producto}
                                    informacion={this.props.productos[producto]}
                        ></Producto>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Productos;
