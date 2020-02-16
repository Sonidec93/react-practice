import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

// const app = () => {
// const [state, setState] = useState({
//   persons: [
//     { name: 'Mukul', age: 26 },
//     { name: 'Manu', age: 27 }
//   ]
// })
class App extends Component {

  state = {
    persons: [
      { id: 'asf1', name: 'mukul', age: 26, hobbies: ['football', 'badminton'] },
      { id: 'asf2', name: 'Ramesh', age: 28, hobbies: ['chess', 'carrom'] }
    ],
    showPerson: false
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 27 }
      ]
    });//using useState react hook will update the state not merge it to old state so we have to make sure we update all values to the state we want to update

  }
  changeFunc = (index, event) => {
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({
      persons
    })
  }

  toggleShowPerson = () => {
    let toggledValue = !this.state.showPerson;
    this.setState({ showPerson: toggledValue });
  }
  deleteHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }
  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((x, index) => {
            return <Person name={x.name} age={x.age} changeFunc={this.changeFunc.bind(this, index)} onDelete={this.deleteHandler.bind(this, index)} key={x.id} >My hobbbies are:{x.hobbies}</Person>
          })}
        </div>
      )
    }
    const style = {
      backgroundColor: 'grey'
    };
    return (
      <div className='App' style={style}>
        <h2>React App</h2>
        <button onClick={this.toggleShowPerson}>Switch</button>
        {person}
      </div>
    );
  }
}

export default App;
