import React, { Component } from 'react';

import Shape from '../components/shape/Shape'

import Instructions from '../components/Instructions'
import Step from '../components/Step'


import OverlayNav from '../components/OverlayNav'

export default function zero() {


    return (
<div>

<div className="row">

  <div className="col-sm-4 instructions-container">
    <div className="text scroll">
      <Instructions title="Data Flow With Redux">
        <Step title="Getting Started">
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          <p>Basic explanations and code samples will be provided here, on the left-hand side.</p>
          <p>Clicking on the labelled items on the right-hand will show more detailed explanations, resources, and code samples.</p>
        </Step>
        <Step title="Structure">
          <p>First, we'll define some key terms you'll need to understand to get the most out of this guide. 
            Redux is a pretty simple pattern to follow, but it's easy to get hung up on the jargon that gets thrown around. 
          </p>
          <p>After that, we'll dive into the thick of things: each step in the process of a user triggering an update 
            in your app will be covered and explained in detail. </p>
        </Step>
        <Step title="Who's this for?">
          <p>This guide is aimed at beginner web developers and those new to the Flux/Redux pattern. If you've already built an app or two
            using Redux, this guide most likely won't be of great benefit to you, but a little refresher never hurt anyone ;) </p>
        </Step>
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
        ShapeStyle={style.store}
        TipStyle={style.tip}
      > Store </Shape>

      <Shape
        title="View who?"
        tooltip="This is what the user sees."
        placement="top"
        type="view"
        ShapeStyle={style.view}
        TipStyle={style.tip}
        > View </Shape> 

      <Shape
        title="Reducers: Heavy Lifting Functions"
        tooltip="This is where the magic of updating your state happens."
        placement="bottom"
        type="reducer"
        ShapeStyle={style.reducer}
        TipStyle={style.tip}
        > Reducer </Shape> 

      <Shape 
        title="Middleware: My Functionality, Please"
        tooltip="Middleware is optional packages that add additional functionality to existing packages. The only we'll be dealing with in this walkthrough is redux-promise-middleware"
        placement="left"
        type="middleware"
        ShapeStyle={style.middleware}
        TipStyle={style.tip}
        > Middleware </Shape>

      <Shape
        title="Actions: Just An Object"
        tooltip="These are the movers and shakers in a Redux application. These are just objects."
        placement="right"
        type="action"
        ShapeStyle={style.action}
        TipStyle={style.tip}
        > Action </Shape>

      <Shape 
        title="State of Affairs"
        tooltip="This is where all the magic is stored."
        placement="left"
        type="state"
        ShapeStyle={style.state}
        TipStyle={style.tip}
        > State </Shape>

      <Shape
        title="Event"
        tooltip="It has to start somewhere"
        placement="right"
        type="event"
        ShapeStyle={style.event}
        TipStyle={style.tip}
        > Event </Shape>
    </div>
  </div>
</div>
    
    <OverlayNav startButtonDisplay="true"/>

</div>
      
    );
  }

const style = {
  tip : {
    background: 'white'
  },
  store: {
    marginTop: '30px',
  },
  view: {
    margin: 'auto',
    marginTop: '270px',
  },
  reducer: {
    position: 'absolute',
    top: '86px',
    left: '350px',
  },
  middleware: {
    position: 'absolute',
    top: '98px',
    right: '590px'
  },
  action: {
    position: 'absolute',
    top: '260px',
    right: '390px',
  },
  state: {
    position: 'absolute',
    top: '69px',
    right: '251px',
  },
  event: {
    position: 'absolute',
    bottom: '209px',
    right: '391px',
  }
}
