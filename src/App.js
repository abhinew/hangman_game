import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomPage';
import  { Route }  from 'react-router-dom'
import GamePage from './components/GamePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" component={HomePage} />  
        <Route exact path="/hangman" component={GamePage} />  
      </div>
    );
  }
}

export default App;
