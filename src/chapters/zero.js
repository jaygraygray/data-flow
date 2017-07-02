import React, { Component } from 'react';

import Shape from '../components/shape/Shape'

import Instructions from '../components/Instructions'
import Step from '../components/Step'
import { Link } from 'react-router-dom'



export default function zero() {


    return (
<div>
<div className="row">

  <div className="col-sm-4 instructions-container">
    <div className="text scroll">
      <Instructions title="Data Flow With Redux">
        <Step title="Getting Started">
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          <p>In the next section, we will explore how this data flow works with a React application, then how
          this flow is modified when requesting data from an API.</p>
          <p>To begin, we'll cover the three main aspects Redux adds to an app: the <em>store</em>,
          <em>reducers</em>, and <em>actions</em>.</p>
          
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          
          <p>In the next section, we will explore how this data flow works with a React application, then how
            this flow is modified when requesting data from an API.</p>
        </Step>
        <Step title="This is the second step!">
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          <p>In the next section, we will explore how this data flow works with a React application, then how
          this flow is modified when requesting data from an API.</p>
          <p>To begin, we'll cover the three main aspects Redux adds to an app: the <em>store</em>,
          <em>reducers</em>, and <em>actions</em>.</p>
          
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          
          <p>In the next section, we will explore how this data flow works with a React application, then how
            this flow is modified when requesting data from an API.
          </p>
        </Step>
        <Step title="This is the third step!">
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          <p>In the next section, we will explore how this data flow works with a React application, then how
          this flow is modified when requesting data from an API.</p>
          <p>To begin, we'll cover the three main aspects Redux adds to an app: the <em>store</em>,
          <em>reducers</em>, and <em>actions</em>.</p>
          
          <p>By the end of this guide, you will understand how data flows in an application utilizing Redux.</p>
          
          <p>In the next section, we will explore how this data flow works with a React application, then how
            this flow is modified when requesting data from an API.
          </p>
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
      
    
<div className="row overlay">
  <div className="col-sm-4">&nbsp;</div>
    <div className="col-sm-8 overlay-content">
      <Link to="step1">
        <div className="section effect7"><span className="num">1</span> <span className="section-text">What is Redux?</span></div>
      </Link>
      <div className="section effect7"><span className="num">2</span> <span className="section-text">Actions, Stores, Reducers, Oh My!</span></div>
      <div className="section effect7"><span className="num">3</span> <span className="section-text">User Events</span></div>
      <div className="section effect7"><span className="num">4</span> <span className="section-text">Actions: Creators, Types, Payloads</span></div>
      <div className="section effect7"><span className="num">5</span> <span className="section-text">Dispatching Actions to Reducers</span></div>
      <div className="section effect7"><span className="num">6</span> <span className="section-text">Reducer Madness</span></div>
      <div className="section effect7"><span className="num">7</span> <span className="section-text">Reducer Madness: Extended</span></div>
      <div className="section effect7"><span className="num">8</span> <span className="section-text">New State, New View, New You</span></div>
      <a href="#" className="start"> Start &nbsp; &gt; </a>
    </div>
  </div>
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
