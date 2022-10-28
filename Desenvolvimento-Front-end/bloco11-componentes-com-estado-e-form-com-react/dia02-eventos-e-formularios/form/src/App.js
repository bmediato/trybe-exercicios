import './App.css';
import React from 'react';


class App extends React.Component {
 constructor() {
  super()
  this.state = {
    nome: '',
    vaiComparecer: false,
    estadoFavorito: ''
  }
 }

 changue = (event) => {
  const {target} = event;
  const {name} = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({[name]: value});
 }
 
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Title</legend>
          <label>
            Nome
            <input type="text"
            name='nome' 
            value={this.state.nome}
            onChange={this.changue}>
          </input>  
            </label>
            <labe>
              Irá Comparecer?
              <input type="checkbox"
              name='vaiComparecer'
              value={this.state.vaiComparecer}
              onChange={this.changue}>
              </input>
            </labe>
            <labe>
              <textarea 
              name='estadoFavorito'
              value={this.state.estadoFavorito}
              onChange={this.changue}>
              </textarea>
            </labe>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
