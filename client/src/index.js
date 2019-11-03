import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Root from './components/Root';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 2000,
    draggable: false
});

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root'));