import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container-sm mt-4">
        <Main />
      </div>
    </div>
  );
}

export default App;
