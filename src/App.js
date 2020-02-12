import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = {
    people: [
        {name: "janusz", age: 16},
        {name: "anna", age: 20},
        {name: "magda", age: 60},
        {name: "kajetan", age: 6}
    ]
  };
  onClickHandler = addTo => {
      const copiedState = this.state.people.map(person => {
          let {name, age} = person;
          if(addTo === name){
              age+=10;
          };
          return {name, age};
      })
      this.setState({people: copiedState})
  };

  showState = () => {
    console.log(this.state.people);
  };

  render(){
      const people = this.state.people.map(person => {
          const {name, age} = person;
          return (
              <Person name={name} age={age} key={name} clicker={() => this.onClickHandler(name)}>
                  {name === 'janusz' ? "I like video games!" : null}
              </Person>
          )
      });
      return (
          <div className="App">
              {people}
              <button onClick={this.showState}>SHOW STATE</button>
          </div>
      );
  }

}

export default App;
