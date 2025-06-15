import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ResultsProvider} from './context/ResultsContext';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ResultsProvider>
        <App/>
    </ResultsProvider>,
);