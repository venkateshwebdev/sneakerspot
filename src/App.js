import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header';
import Home from './containers/Home/Home';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserContext from './context/userContext';

function App() {
  const [user,setUser] = useState("")
  return (
    <div className="App">
      <Provider store={store}>
      <UserContext.Provider value={{user,setUser}}>
      <Navbar />
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
