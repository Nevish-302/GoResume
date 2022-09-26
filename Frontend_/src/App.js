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
import Edu from './components/Edu'; 
import { createContext, useReducer } from 'react';
import {initialstate,reducer} from "../src/reducer/usereducer" 
import Skillset from './components/Skillset';


export const UserContext = createContext(); 

function App() {

  
  const [state,dispatch]= useReducer(reducer,initialstate);

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routes>
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/dashboard' element={<Dashboard />}/>
      <Route exact path='/Contact' element={<Contact />}/>
      <Route exact path='/Workexp' element={<Workexp />}/>
      <Route exact path='/personal' element={<Personal />}/>
      <Route exact path='/education' element={<Edu />}/>
      <Route exact path='/skill' element={<Skillset />}/>
    </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
