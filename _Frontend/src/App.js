import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
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
import Home from './components/Home';
import Template from './components/Template';
import QrTemplate from './components/QrTemplate';
import { useParams } from 'react-router-dom'

export const UserContext = createContext(); 

function App() {

  
  const [state,dispatch]= useReducer(reducer,initialstate);

  return (
    <>
    <CookiesProvider>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routes>
      <Route exact path='/signup' element={<Signup />}/>
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/dashboard' element={<Dashboard />}/>
      <Route exact path='/Contact' element={<Contact />}/>
      <Route exact path='/Workexp' element={<Workexp />}/>
      <Route exact path='/QRtemplate' element={<QrTemplate hook =  {useParams} />}/>
      <Route exact path='/personal' element={<Personal />}/>
      <Route exact path='/education' element={<Edu />}/>
      <Route exact path='/skill' element={<Skillset />}/>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/template' element={<Template />}/>
    </Routes>
    </UserContext.Provider>
    </CookiesProvider>
    </>
  );
}

export default App;
