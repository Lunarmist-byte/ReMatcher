import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ResultsProvider} from './context/ResultsContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ResultsProvider>
        <App/>
    </ResultsProvider>
    document.getElementById('root')
);