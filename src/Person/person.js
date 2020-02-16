import './person.css';
import React from 'react';
const person = (props) => {

    return (
        <div className="person">
            <h1 onClick={props.onDelete}>{props.name}</h1>
            <p>My age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" name="name" onChange={props.changeFunc}  value={props.name}/>
        </div>
    )
}

export default person;

