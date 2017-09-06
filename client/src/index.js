import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from "./config/routes";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
