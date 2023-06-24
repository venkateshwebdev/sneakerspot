import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header';
import Home from './containers/Home/Home';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
      <Outlet />
      </Provider>
    </div>
  );
}

export default App;
