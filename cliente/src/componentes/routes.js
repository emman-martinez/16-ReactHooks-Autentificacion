import React from 'react';
import { Route, Router } from 'react-router-dom';

/* ***** Componentes Auth0 ***** */
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

/* ***** Componentes Propios ***** */
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import SingleProducto from './SingleProducto/SingleProducto';
// import Error from './Error/Error';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="contenedor">
          { /* Componente: Header */ }
          <Header></Header>

          { /* *****_____Rutas_____***** */ } 

          { /* Componente: Productos */ }
          <Route exact path="/" render={(props) => (
            
            <React.Fragment>
              {/* Componente: Navegacion */ }
              <Navegacion
                            auth={auth} {...props}
              ></Navegacion>
              {/* Componente: Productos */}
              <Productos
                          // productos={resultado}
                          // busquedaProducto={this.busquedaProducto}
                          auth={auth} {...props}
              ></Productos>
            </React.Fragment>
            
          )}></Route>

          { /* Componente: Nosotros */ }
          <Route exact path="/nosotros" render={(props) => (
            
            <React.Fragment>
              {/* Componente: Navegacion */ }
              <Navegacion
                            auth={auth} {...props}
              ></Navegacion>
              {/* Componente: Nosotros */}
              <Nosotros></Nosotros>
            </React.Fragment>
          
          )}></Route>

          { /* Componente: Contacto */}
          <Route exact path="/contacto" render={(props) => (
            <React.Fragment>
              <Navegacion
                            auth={auth} {...props}
              ></Navegacion>
              <Contacto
                          // productos={resultado}
                          // busquedaProducto={this.busquedaProducto}
                          auth={auth} {...props}
              ></Contacto>
            </React.Fragment>
          )}></Route>

          { /* Componente: Productos */ }
          <Route exact path="/productos" render={(props) => (
            <React.Fragment>
              {/* Componente: Navegacion */ }
              <Navegacion
                            auth={auth} {...props}
              ></Navegacion>
              {/* Componente: Productos */}
              <Productos
                          // productos={resultado}
                          // busquedaProducto={this.busquedaProducto}
                          auth={auth} {...props}
              ></Productos>
            </React.Fragment>
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
                                auth={auth} {...props}
                ></SingleProducto>
            )
          }}></Route>

          { /* Componente: Error 
              <Route component={Error}></Route>
          */}
          
          { /* Componente: Callback */}
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
