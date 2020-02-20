import React, { Component } from 'react';
import Person from './Person/person';


class Persons extends Component {

    //    static getDerivedStateFromProps(props, state) {
    //         console.log('Persons getDerivedStateFromProps');
    //     }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons shouldComponentUpdate');
        console.log(nextProps.persons!==this.props.persons);
        return nextProps.persons!==this.props.persons;
        // return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }
    componentDidUpdate() {
        console.log('Persons componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('[Persons.js] cleanup code');
    }

    render() {
        console.log('Persons rendering');
        return this.props.persons.map((p, index) => {
            return (
                <Person name={p.name} age={p.age} key={p.id} changeFunc={(event) => { this.props.changeFunc(index, event) }} onDelete={(event) => { this.props.onDelete(index, event) }}>{p.hobbies}</Person>
            )
        })
    }
}

export default Persons;