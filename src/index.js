import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
    <SpeechProvider appId='87114463-ca5e-4d70-bdd2-58655cd893f6' language='en-US'>
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root'));