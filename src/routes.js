import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App'

const Home = (nextState, cb) =>
	require.ensure([], require => cb(null, require('./components/Home').default))

const About = (nextState, cb) =>
	require.ensure([], require => cb(null, require('./components/About').default))

const Routes = props => <Router {...props}>
  <Route path='/' component={App}>
    <IndexRoute path='' getComponent={Home} />
    <Route path='about' getComponent={About} />
    <Route path='*' getComponent={Home} />
  </Route>
</Router>

export default Routes
