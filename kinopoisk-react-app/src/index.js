import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

ReactDOM.render(
  <React.StrictMode>

    <Provider store={createStore(reducer)}>
      <Navigation />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);