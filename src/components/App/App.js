import React from 'react'
import {Link} from 'react-router'
import logo from './logo.svg'
import './App.css'

const App = props => <div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <Link to='/'>Home</Link>{' '}
  <Link to='about'>About</Link>
  {props.children}
</div>

export default App
