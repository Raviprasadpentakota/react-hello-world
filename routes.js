import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import HelloWorld from './components/HelloWorld'
import About from './components/About'
import AppContainer from './components/AppContainer'

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={HelloWorld} />
    <Route path='/about' component={About} />
  </Route>
)
