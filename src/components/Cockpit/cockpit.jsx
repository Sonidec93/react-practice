import React from 'react';

const Cockpit = (props) => {
    return (
        <div>
            <p className={props.classes.join(' ')}>React App</p>
            <button className={props.buttonClass} onClick={props.toggleShowPerson}>Toggle</button>
        </div>
    )
}
export default Cockpit;