import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import UserName from './components/UserName';
import Trades from './components/Trades';
import Sell from './components/Sell';
import Portfolio from './components/Portfolio';
import Lookup from './components/Lookup';
import Buy from './components/Buy';
import login from './util/login';
import Login from './components/Login';
import Logout from './components/Logout';
import isloggedin from './util/isloggedin';
import logout from './util/logout';
import Nav from './components/Nav';


class App extends Component {
  state={
    refresh:""
  }

  loginClick=(event)=>{
    event.preventDefault()
    login()
    this.setState({refresh: "loggedin"})
  }

  logoutClick=(event)=>{
    event.preventDefault()
    logout()
    this.setState({refresh: "loggedout"})
  }
  render() {
    let routelist=[]
    let nav=[]
    if (isloggedin()){
        routelist=
          [<Route exact path="/" component={Home}/>, 
          <Route exact path="/UserName" component={UserName}/>,
          <Route exact path="/Trades" component={Trades}/>,
          <Route exact path="/Sell" component={Sell}/>,
          <Route exact path="/Portfolio" component={Portfolio}/>,
          <Route exact path="/Lookup" component={Lookup}/>, 
          <Route exact path="/Buy" component={Buy}/>,             
          <Route exact path="/" render={(props)=><Logout {...props} clicked={this.logoutClick}/>}/>
        ]

        nav=<Nav/>
        
    } else {
        routelist=[
          <Route path="/" render={(props)=><Login {...props} clicked={this.loginClick}/>}/>
          
        ]
        nav=""
    }
    return (
      <BrowserRouter>
        <div className="App"> 
        <h1>React Terminal Trader</h1> 
        <div className="container">
        {nav}      
        <main>
          {routelist}
          </main>
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
