import React from 'react';
import Person from './Person/person';
const Persons = (props) => props.persons.map((p, index) => {
    return (
        <Person name={p.name} age={p.age} key={p.id} changeFunc={(event) => { props.changeFunc(index,event) }} onDelete={(event) => { props.onDelete(index, event) }}>{p.hobbies}</Person>
    )
})


export default Persons;