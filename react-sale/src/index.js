import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import axios from 'axios';
React.Component.prototype.$http = axios;
ReactDOM.render(<App />, document.getElementById('root'));