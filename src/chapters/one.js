import React, { Component } from 'react';

import Shape from '../components/shape/Shape'

import Instructions from '../components/Instructions'
import Step from '../components/Step'
import BottomNav from '../components/BottomNav'

import { Link } from 'react-router-dom'

export default class One extends Component {
  render() {
    return (
<div>
<div className="row">
  <div className="col-sm-4 instructions-container">
    <div className="text scroll">
      <Instructions title="What is Redux?">
        <Step title="This is what Redux is">
          fl;aksdjf; laskjfa stjwa [oijsdl;fk jawtel; kjasd;lkj sdf;ljka wto[ij]]
        </Step>
        <Step title="This is not what Redux is"></Step>
        <Step title="Actions, Reducers, Store"></Step>
        <Step title="When to use?"></Step>
      </Instructions>
    </div>  
  </div>

  <div className="col-sm-8 viz-container">
    <div className="body">
      <Shape
        title='What is the store?'
        tooltip="The store is what holds the value of our state. It's also where our reducers lives."
        type="store"
        ShapeStyle={style}
        TipStyle={tipStyle}
      > Store </Shape>


        <div className="view effect6"><h1>View</h1></div>   
        {/*
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
        <div className="event"><h2>Event</h2></div>*/}
     



      <BottomNav/>  
    </div>
  </div>
 
</div>
     

</div>
      
    );
  }
}

const tipStyle = {
  fontFamily: 'Ubuntu',
  lineHeight: '24px'
}

const style = {
  store: {
    marginTop: '150px',
    marginLeft: '320px',
  },
}