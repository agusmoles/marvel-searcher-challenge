import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./theme/globalStyles";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
