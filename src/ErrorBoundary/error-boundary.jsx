import React, { Component } from 'react';



class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });

    }

    render() {
        if (this.state.hasError) {
            return <h2>Some error occured</h2>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;