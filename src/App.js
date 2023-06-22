import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
