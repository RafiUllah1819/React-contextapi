import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextWrap} from "./context/Context"


ReactDOM.render(
  <React.StrictMode>
<ContextWrap>
  <App />
</ContextWrap>

  </React.StrictMode>,
  document.getElementById('root')
);
