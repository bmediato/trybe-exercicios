import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="name">
          Name
        <input
        id="name"
        type="text"
        value={name}
        onChange={ ({target}) => setName(target.name)}>
        </input>
        </label>
        <br></br>
        <br></br>
        <label htmlFor="age">
          Age
          <input
          id="age"
          type="number"
          value={age}
          onChange={ ({target}) => setAge(target.value) }>
          </input>
        </label>
        <br></br>
        <br></br>
        <label htmlFor="location">
          Location
          <input
          id="location"
          type="text"
          value={city}
          onChange={({target}) => setCity(target.value) }>
          </input>
        </label>
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentos">
          <input
          type="radio"
          id="fundamentos"
          name="module"
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={ ({target: {value}}) => setModule(value) }
          />  Fundamentos
        </label>
        <br>
        </br>
        <label htmlFor="frontend">
          <input 
          type="radio"
          id="frontend"
          name="module"
          value="Front-End"
          checked={module === 'Front-End'}
          onChange={ ({target: {value}}) => setModule(value)}
          /> Front-End
        </label>
        <br>
        </br>
        <label htmlFor="backend">
        <input
        type="radio"
        id="backend"
        name="module"
        value="Back-End"
        checked={module === 'Back-End'}
        onChange={ ({target: {value}}) => setModule(value)}
        /> Back-End
        </label>
        <br>
        </br>
        <label htmlFor="cs">
          <input 
          type="radio"
          id="cs"
          name="module"
          value="Ciência da computação"
          checked={module === 'Ciência da computação'}
          onChange={ ({target: {value}}) => setModule(value)}
          /> Ciência da Computação
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
