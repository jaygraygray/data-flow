import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Step0 from './steps/zero'
import Step1 from './steps/one'
import App from './App'

const Router = () => {
  
    return (
      <Switch>
        <Route path='/' component={ Step0 } />
        <Route path='/step1' component={ Step1 } />
      </Switch>
    )
}

export default Router;