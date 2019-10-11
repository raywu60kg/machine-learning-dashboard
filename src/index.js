import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
