// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = [{
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars'
      }
    },
    {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars'
      }
    }]

    return (
      headphone.map( item => (
        <div className="App">
           <Order user={item.user} product={item.product} price={item.price}/>
        </div>

      )));
  }
}

export default App;
