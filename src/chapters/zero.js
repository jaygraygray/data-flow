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
            this flow is modified when requesting data from an API.
          </p>
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
      tooltip="The store is what holds the value of our state. It's also where our reducers lives."
      offsetLeft="-800"
      offsetTop="-400"
      type="store"
      ShapeStyle={'fdsa'}
      TipStyle={'asdf'}
      title='What is the store?'
      > Store </Shape>
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

const tipStyle = {
  fontFamily: 'Ubuntu',
  lineHeight: '24px'
}

const storeStyle = {
  store: {
    textAlign: 'center',
    width: '500px',
    height: '142px',
    color: 'rgb(46, 196, 182)',
    marginLeft: '392px',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'rgb(46, 196, 182)',
    borderRadius: '6px',
    background: 'rgb(183, 255, 247)',
    position: 'relative',
  },
  h1:  {
    position: 'absolute',
    top: '-70px',
    left: '221px',
  }
}
