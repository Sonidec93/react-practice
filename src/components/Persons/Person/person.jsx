import PersonCss from './person.css';
import React, { Component } from 'react';
import Radium from 'radium';
// import { render } from 'react-dom';

class Person extends Component { 
    // var rand = Math.random();
    // if (rand > 0.5) {
    //     throw new Error('Some error');
    // }
    render(){
        return (
            <div className={PersonCss.person}>
                <h1 onClick={this.props.onDelete}>{this.props.name}</h1>
                <p>My age is {this.props.age}</p>
                <p className="glb-modifier">Global value</p>
                <p>{this.props.children.join(' ')}</p>
                <input type="text" name="name" onChange={this.props.changeFunc} value={this.props.name} />
            </div>
        )
    }
}

export default Radium(Person); //Higher order component

