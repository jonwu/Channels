import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './browser/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
