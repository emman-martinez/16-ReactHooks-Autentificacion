import React, { Component } from 'react';
import Router from './Router';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="contenedor">
          { /* Componente: Router */ }
          <Router></Router>
        </div>
        { /* Componente: Imagen */ }    
        <Imagen></Imagen>
      </div>
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
