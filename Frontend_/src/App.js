import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Personal from './components/Personal';
import Contact from './components/Contact';
import Workexp from './components/Workexp';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/dashboard' element={<Dashboard />}/>
      <Route exact path='/personal' element={<Personal />}/>
      <Route exact path='/Contact' element={<Contact />}/>
      <Route exact path='/Workexp' element={<Workexp />}/>
    </Routes>
    </>
  );
}

export default App;
