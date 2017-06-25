import React, { Component } from 'react';
import './App.css';
import './style.css';

import User from './components/user/User';
import Store from './components/store/Store';
import Shape from './components/shape/Shape';

import Step0 from './steps/zero'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

class App extends Component {

  render() {

    return (
      <div>

      <Step0 />



      <div className="content">

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
      </div>


    </div>



    );
  }
}

export default App;
