import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import commentReducer  from './reducers/commentSlice'


const store = configureStore({ reducer: { comment: commentReducer}, })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>

);
