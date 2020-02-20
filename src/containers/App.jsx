import React, { Component } from 'react';
import AppClass from './App.css';
// import Person from './Person/person';
import Radium from 'radium';
// import ErrorBoundary from './ErrorBoundary/error-boundary';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/cockpit';
// import styled from 'styled-components';
// import logo from './logo.svg';

// const app = () => {
// const [state, setState] = useState({
//   persons: [
//     { name: 'Mukul', age: 26 },
//     { name: 'Manu', age: 27 }
//   ]
// })
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }
  state = {
    persons: [
      { id: 'asf1', name: 'mukul', age: 26, hobbies: ['football', 'badminton'] },
      { id: 'asf2', name: 'Ramesh', age: 28, hobbies: ['chess', 'carrom'] }
    ],
    showPerson: false,
    showCockpit: true
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 27 }
      ]
    });//using useState react hook will update the state not merge it to old state so we have to make sure we update all values to the state we want to update

  }

  // static getDerivedStateFromProps = (props, state) => {
  //   console.log('getDerivedStateFromProps', props)
  // }
  changeFunc = (index, event) => {
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({
      persons
    })
  }
  toggleCockpit = () => {
    let val = this.state.showCockpit;
    this.setState({ showCockpit: !val });
  }
  componentDidMount = () => {
    console.log('App.js Component Did Mount');
  }
  toggleShowPerson = () => {
    let toggledValue = this.state.showPerson;
    this.setState({ showPerson: !toggledValue });
  }
  deleteHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }
  render() {
    console.log('render in app.')
    let person = null;
    const classes = [];
    let buttonClass = AppClass.Red;
    const style = {
      backgroundColor: 'red',
      border: '2px solid black',
      ':hover': {
        backgroundColor: 'transparent',
        border: '2px solid red'
      },
      '@media (min-width:480px)': {
        backgroundColor: 'violet'

      }
    };

    if (this.state.showPerson) {
      buttonClass = AppClass.Green
      style.backgroundColor = 'green';
      style[':hover'].backgroundColor = 'lightgreen';
      // <div>
      //   {this.state.persons.map((x, index) => {
      //     return <ErrorBoundary ><Person name={x.name} age={x.age} key={x.id} changeFunc={this.changeFunc.bind(this, index)} onDelete={this.deleteHandler.bind(this, index)} >My hobbbies are:{x.hobbies}</Person></ErrorBoundary>
      //   })}
      // </div>
      person = (
        <Persons persons={this.state.persons} changeFunc={this.changeFunc} onDelete={this.deleteHandler}></Persons>
      )
      if (this.state.persons.length >= 1) {
        classes.push(AppClass['app__para--blue']);
      }
      if (this.state.persons.length >= 2) {
        classes.push(AppClass['app__para--bold']);
      }
    }
    // const StyledButton = styled.button`
    // background-color:${props => props.alt};
    // border:2px solid black;
    // &:hover{
    //   background-color:transparent;
    // }
    // @media screen and (min-width:480px){
    //   background-color:orange;
    // }
    // `
    /* <StyledButton alt={this.state.showPerson ? 'red' : 'green'} onClick={this.toggleShowPerson}>Toggle</StyledButton> */
    return (
      <div className={AppClass.App}>
        <button onClick={this.toggleCockpit} className={AppClass.Red}> Toggle Cockpit component</button>
        {
          this.state.showCockpit ? <Cockpit persons={this.state.persons} classes={classes} buttonClass={buttonClass} toggleShowPerson={this.toggleShowPerson}></Cockpit>
            : null
        }
        {person}
      </div >

    );
  }
}

export default Radium(App);
