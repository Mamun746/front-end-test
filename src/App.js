import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login';
import SingUp from './components/SingUp';
import Homepage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.css'
import Search from './components/Search'


function App() {
  return (
    <BrowserRouter >
    <Navbar/>
    <Search/>
    <Switch>
    <Route path='/' exact component={Homepage}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={SingUp}/>

    </Switch>
        
    </BrowserRouter>
  );
}

export default App;
