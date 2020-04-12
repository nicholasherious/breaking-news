import React from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <NavBar />
<div className="container-lg mt-4">
  <Header />
      <div className="row">
        <div className="col-sm-8">
          <Main />
        </div>
        <div className="col-sm-4">
          <SideBar />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
