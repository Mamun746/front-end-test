import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import SingUp from './components/SingUp';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter >
    <Navbar/>
    
    <Switch>
    
    <Route path='/' exact component={Home}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={SingUp}/>

    </Switch>
        
    </BrowserRouter>
  );
}

export default App;
