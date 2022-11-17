import React, {userState} from 'react';

function Form() {
  const [name, setName] = userState('');
  const [age, setAge] = userState('');
  const [city, setCity] = userState('');

  return (
    <form>
      <fieldset>
        <h1>Dados Pessoais</h1>
        <label htmlFor="name">
          Nome
          <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={({target}) => setName(target.value) }
          ></input>
          </label>
          <label htmlFor="age">
            Idade
            <input
            type="number"
            id="age"
            value={age}
            onChange={({target}) => setAge(target.value)}></input>
          </label>
          <label htmlFor="city">
            Location
            <input 
            type="text"
            id="city"
            value={city}
            onChange={ ({target}) => setCity(target.value)}>
            </input>
          </label>
      </fieldset>
    </form>
   );
}

export default Form;
