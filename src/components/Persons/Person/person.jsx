import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AuthContext from '../../../context/app-context';
import Aux from '../../hoc/Aux';
import WithClass from '../../hoc/WithClass';
import PersonCss from './person.css';
// import { render } from 'react-dom';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        this.inputElRef.current.focus();
    }
    render() {
        // return (
        //     <AuthContext.Consumer>
        //         {(context) => {
        return (
            <Aux>
                <h1 key='i1' onClick={this.props.onDelete}>{this.props.name}</h1>
                <p key='i8'>user is {this.context.authenticated ? 'Authenticated' : 'needs to login'}</p>
                <p key='i2'>My age is {this.props.age}</p>
                <p key='i3' className="glb-modifier">Global value</p>
                <p key='i4'>{this.props.children.join(' ')}</p>
                <input key='i5' type="text" name="name"
                    ref={this.inputElRef}
                    onChange={this.props.changeFunc} value={this.props.name} />
            </Aux>
        )
        //     }}
        // </AuthContext.Consumer>
        // )
    }
}
Person.propTypes = {
    onDelete: PropTypes.func,
    name: PropTypes.string,
    changeFunc: PropTypes.func,
    age: PropTypes.number
}

export default WithClass(Person, PersonCss.person); //Higher order component

