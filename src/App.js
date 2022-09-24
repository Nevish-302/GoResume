import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}

export default App;
