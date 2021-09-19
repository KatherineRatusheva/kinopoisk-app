import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import Footer from './components/footer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Navigation />
      <Footer />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);