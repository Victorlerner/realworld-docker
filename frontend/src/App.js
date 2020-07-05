import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
function App() {
  // fetch('http://realworld-docker.com/api/posts').then(res => {
  //  setState({
  //    posts
  //  })
  // })

  const makeApiRequst =() => {
    console.log('makeApiRequest')
    axios("api/testwithcurrentuser").then(res =>{
      console.log('response', res)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> Dev sf asdfas
         <code>src/App.js</code> and save to reload. change
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequst}>Make api request</button>
    </div>
  );
}

export default App;
