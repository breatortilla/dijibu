import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SignIn from './SignIn';
import TrackersMain from './TrackersMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <TrackersMain />
      </div>
    );
  }
}

export default App;
