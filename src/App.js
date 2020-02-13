import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

const app = () => {
  // class App extends Component {
  const [state, setState] = useState({
    persons: [
      { name: 'Mukul', age: 26 },
      { name: 'Manu', age: 27 }
    ]
  })
  const switchHandler = (newName) => {
    setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 27 }
      ]
    });//using useState react hook will update the state not merge it to old state so we have to make sure we update all values to the state we want to update

  }
  const changeFunc = (event) => {

    setState({
      persons: [
        { name: event.target.value, age: 25 }
      ]
    })
  }
  const style = {
    backgroundColor: 'grey'
  }
  // render() {
  return (
    <div className="App" style={style}>
      <Person name={state.persons[0].name} age={state.persons[0].age} click={switchHandler.bind(this, 'Mayank')}  changeFunc={changeFunc}>My Hobbies are cricket,football</Person>
      <button onClick={switchHandler.bind(this, 'Ramesh')}>Switch</button>
    </div>
  );
  // }
}

export default app;
