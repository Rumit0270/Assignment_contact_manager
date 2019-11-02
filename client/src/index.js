import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Root from './components/Root';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root'));