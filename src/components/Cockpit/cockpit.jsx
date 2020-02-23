import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/app-context';
import CockpitCss from './cockpit.css';


const Cockpit = (props) => {

    // const toggleBtnRef = useRef(null);
    const context = useContext(AuthContext);
    let buttonClass = CockpitCss.green;
    let classes = [];

    if (props.personsLength >= 1) {
        classes.push(CockpitCss['cockpit__para--blue']);
    }
    if (props.personsLength >= 2) {
        classes.push(CockpitCss['cockpit__para--bold-and-pink']);
    }
    useEffect(() => {
        console.log('cockpit.js useEffect');
        // toggleBtnRef.current.click();
        return () => {
            console.log('Cleanup code Cockpit.jsx')
        }
    }, []);
    useEffect(() => {
        console.log('Cockpit.jsx 2nd useEffect');
        return () => {
            console.log('Cleanup code for 2nd use Effect');
        }
    });
    return (
        // <AuthContext.Consumer>{(context) => {
        // return (
        <div>
            <p className={classes.join(' ')}>React App</p>
            <button className={buttonClass} onClick={props.toggleShowPerson}>Toggle</button>
            <button className={CockpitCss.red} onClick={context.login}>Toggle Login</button>
        </div>
    )
    // }}
    // </AuthContext.Consumer>
    // )
}
export default React.memo(Cockpit);