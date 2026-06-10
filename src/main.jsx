import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';
import { RestaurantProvider } from './context/RestaurantContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestaurantProvider>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />
    </Provider>
    </RestaurantProvider>
  </React.StrictMode>,
);