import React from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://3.120.96.16:3000/');

function App() {
  return (
    <div className="App">
      <h1>MAKE CHATT</h1>
    </div>
  );
}

export default App;
