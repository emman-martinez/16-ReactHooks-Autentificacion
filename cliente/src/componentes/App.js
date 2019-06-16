import React, { Component } from 'react';
import { makeMainRoutes } from './routes';
import Imagen from './Imagen/Imagen';
import './../css/App.css';

const routes = makeMainRoutes();

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="App">
          <div className="contenedor">
            { /* Componente: routes */ }
            {routes}
          </div>
          { /* Componente: Imagen */ }    
          <Imagen></Imagen>
        </div>
      </React.Fragment>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
