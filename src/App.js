import React, { Component } from 'react';
import './App.css';
import './style.css';

import { Tooltip, OverlayTrigger } from 'react-bootstrap'

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

      {/*<div className="content">

        <div className="view effect6"><h1>View</h1></div>   
        <div className="reducer-third"><h1>Reducers</h1></div>
        <div className="reducer-second"><h1>Reducers</h1></div>
        <div className="reducer"><h1>Reducers</h1></div>
        <div className="middleware"><h2>Middleware</h2></div>
        <div className="action-container">
          <div className="action-zero"><h1>Actions</h1></div>
          <div className="action-one"><h1>Actions</h1></div>
          <div className="action-two"><h1>Actions</h1></div>
          <div className="action-three"><h1>Actions</h1></div>
          <div className="action-four"><h1>Actions</h1></div>
          <div className="action-five"><h1>Actions</h1></div>
        </div>
        <div className="state"><h2>State</h2></div>
        <div className="event"><h2>Event</h2></div>
      </div>*/}
    </div>
    );
  }


