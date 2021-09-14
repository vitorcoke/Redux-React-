import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import './styles/tailwind.css'
import { Provider } from 'react-redux'
import configStore from './store/store.config'

const store = configStore()


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);


