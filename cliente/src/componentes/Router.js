import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import SingleProducto from './SingleProducto/SingleProducto';
import Error from './Error/Error';
import infoProductos from './../datos/datos.json';

class Router extends Component {

    state = {
        productos: [],   
        terminoBusqueda: '',
    }

    componentWillMount() {
        this.setState({
            productos: infoProductos,
        })
    }

    busquedaProducto = (busqueda) => {
        if(busqueda.length > 3) {
            this.setState({
                terminoBusqueda: busqueda,
            })
            // console.log(this.state.terminoBusqueda);
        } else {
            this.setState({
                terminoBusqueda: '',
            })
        }
    }

    render() {

        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;

        if(busqueda !== '') {
            // console.log('No está vacío');
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1 
            ))
        } else {
            // console.log('Si está vacío');
            resultado = productos;
        }

        return(
            <BrowserRouter>
                <div className="contenedor">
                    { /* Componente: Header */ }
                    <Header></Header>
                    { /* Componente: Navegacion */ }
                    <Navegacion></Navegacion>
                    <Switch>
                        <Route exact path="/" render={() => (
                            /* Componente: Productos */
                            <Productos
                                        productos={resultado}
                                        busquedaProducto={this.busquedaProducto}
                            ></Productos>
                        )}></Route>
                        {/* Componente: Nosotros */}
                        <Route exact path="/nosotros" component={Nosotros}></Route>
                        { /* Componente: Productos */ }
                        <Route exact path="/productos" render={() => (
                            <Productos
                                        productos={resultado}
                                        busquedaProducto={this.busquedaProducto}
                            ></Productos>
                        )}></Route>
                        { /* Componente: SingleProducto */ }
                        <Route exact path="/producto/:productoId" render={(props) => {
                            // console.log(props);
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            // console.log(idProducto);
                            return(
                                <SingleProducto
                                                producto={this.state.productos[idProducto]}
                                                key={idProducto}
                                ></SingleProducto>
                            )
                        }}></Route>
                        { /* Componente: Contacto */}
                        <Route exact path="/contacto" component={Contacto}></Route>
                        { /* Componente: Error */}
                        <Route component={Error}></Route>
                    </Switch>
                </div> 
            </BrowserRouter>
        )
    }
}

export default Router;