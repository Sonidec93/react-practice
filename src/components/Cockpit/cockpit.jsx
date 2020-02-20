import React, { useEffect } from 'react';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit.js useEffect');
        return () => {
            console.log('Cleanup code Cockpit.jsx')
        }
    }, []);
    useEffect(() => {
        console.log('Cockpit.jsx 2nd useEffect');
        return () => {
            console.log('Cleanup code for 2nd use Effect');
        }
    })
    return (
        <div>
            <p className={props.classes.join(' ')}>React App</p>
            <button className={props.buttonClass} onClick={props.toggleShowPerson}>Toggle</button>
        </div>
    )
}
export default Cockpit;