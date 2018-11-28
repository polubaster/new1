import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="card">
          	<div className="left">
          		<h2 className="slogan">You slogan</h2>
          	</div>
          	<div className="right">
          		<h3 className="name">Andrey</h3>
          		<h4 className="position">12345</h4>
          		<p className="phone">0673595915</p>
          		<p className="email">polubaster@gmail.com</p>
          		<p className="social">social</p>
          	</div>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
