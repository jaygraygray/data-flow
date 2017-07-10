import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import Step0 from './chapters/zero'
import Step1 from './chapters/one'

export default function App() {

    return (
      <div>
     
      <Switch>
        <Route exact path='/' component={ Step0 } />
        <Route path='/step1' component={ Step1 } />
      </Switch>

    </div>
    );
  }


