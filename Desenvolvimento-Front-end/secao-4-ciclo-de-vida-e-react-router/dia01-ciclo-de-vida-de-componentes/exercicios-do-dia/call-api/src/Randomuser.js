import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class Randomuser extends React.Component{

  constructor(){
    super()

    this.state = {
      person: [],
      loading: true,
    }
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/ ';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        person: data.results,
        loading: false,
      })
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if(nextState.person[0].dob.age < AGE) return true;
  }

  render(){
    const {loading,person} = this.state;
    if(loading) return <Loading />;
    return(
      <div>
        <PersonCard 
        person={this.getUserElements(person[0])}
        />
      </div>
    )
  }
}

export default Randomuser;
