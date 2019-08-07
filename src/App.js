import React from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import icon from './AO Logo.jpg'
import GoodReads from 'react-goodreads'
import headshot from './AOcampo_Headshot.jpg'
import './App.css';

const headshotSC = styled.div`
  display:flex;
  width:50%;
  height: 300px;
  
`
const GoodReadsSC = styled.div`
  width:50%;
  height: 500px;
  overflow-y:auto;
`

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <headshotSC >
          <img src={headshot} />
          <img src={icon} />
        </headshotSC>
        {/* <headshotSC src={headshot} /> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoodReadsSC>
          <GoodReads apikey="yoRNnsG6o9v63ouNF81eA" />
        </GoodReadsSC> 

      </header>
    </div>
 
      
  );
}

export default App;
