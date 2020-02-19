import Person from './person.css';
import React from 'react';
import Radium from 'radium';

const person = (props) => {
    // var rand = Math.random();
    // if (rand > 0.5) {
    //     throw new Error('Some error');
    // }
    return (
        <div className={Person.person}>
            <h1 onClick={props.onDelete}>{props.name}</h1>
            <p>My age is {props.age}</p>
            <p className="glb-modifier">Global value</p>
            <p>{props.children.join(' ')}</p>
            <input type="text" name="name" onChange={props.changeFunc} value={props.name} />
        </div>
    )
}

export default Radium(person); //Higher order component

