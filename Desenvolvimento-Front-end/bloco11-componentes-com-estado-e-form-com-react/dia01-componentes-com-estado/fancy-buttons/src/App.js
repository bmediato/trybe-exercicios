import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroClicado: 0,
      cliques: 0,
      clicado: 0
    }
  }

  trocaCor = (num) => {
    return num % 2=== 0 ?  'green' : 'pink';
  }

   handleClick = () => {  
    this.setState((estadoAnterior, _props) => ({
      numeroClicado: estadoAnterior.numeroClicado + 1,
    }));
  }
  
   handleClickTwo = () => {   
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1,
    }));
  }
  
   handleClickThree = () => {
    this.setState((estadoAnterior, _props) => ({
      clicado: estadoAnterior.clicado + 1,
    }));
  }
  render() {
    const {numeroClicado, cliques, clicado} = this.state;
    return(
      <div>
        <button type="button" 
        onClick={this.handleClick} 
        style={{backgroundColor: this.trocaCor(numeroClicado)}}>{numeroClicado}</button>

        <button type="button" 
        onClick={this.handleClickTwo} 
        style={{backgroundColor: this.trocaCor(cliques)}}>{cliques}</button>
        <button type="button" 
        onClick={this.handleClickThree} style={{backgroundColor: this.trocaCor(clicado)}}>{clicado}</button>
      </div>
    );
  }
}

export default App;
