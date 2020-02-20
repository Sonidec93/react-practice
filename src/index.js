import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
// import { StyleRoot } from 'radium';

ReactDOM.render(<App appTitle='Person Manager'/>, document.getElementById('root'));
registerServiceWorker();
