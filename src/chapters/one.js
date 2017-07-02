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
        placement="left"
        type="store"
        ShapeStyle={style}
        TipStyle={style.tip}
      > Store </Shape>

      <Shape
        title="View who?"
        tooltip="This is what the user sees."
        placement="top"
        type="view"
        ShapeStyle={style}
        TipStyle={style.tip}
        > View </Shape> 

      <Shape
        title="Reducers: Heavy Lifting Functions"
        tooltip="This is where the magic of updating your state happens."
        placement="bottom"
        type="reducer"
        ShapeStyle={style}
        TipStyle={style.tip}
        > Reducer </Shape>  

      <Shape 
        title="Middleware: My Functionality, Please"
        tooltip="Middleware is optional packages that add additional functionality to existing packages. <br> The only we'll be dealing with in this walkthrough is <b>redux-promise-middleware</b>"
        placement="left"
        type="middleware"
        ShapeStyle={style}
        TipStyle={style.tip}
        > Middleware </Shape>
        {/*
        
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


const style = {
  tip : {
    background: 'white'
  },
  store: {
    marginTop: '30px',
    marginLeft: '320px',
  },
  view: {
    margin: 'auto',
    marginTop: '250px',
  },
  reducer: {
    position: 'absolute',
    top: '111px',
    left: '501px',
  },
  middleware: {
    position: 'absolute',
    top: '94px',
    right: '440px'
  }
}
