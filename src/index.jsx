import React from 'react';
import { hydrate, render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import "./styles/App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
  <Router
    basename={ process.env.PUBLIC_URL }
  >
    <App />
  </Router>
  , rootElement);
} else {
  render(
  <Router
    basename={ process.env.PUBLIC_URL }
  >
    <App /> 
  </Router>
  , rootElement);
}
