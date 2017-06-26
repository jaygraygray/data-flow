import React, { Component } from 'react';

import Shape from '../components/shape/Shape'

import Instructions from '../components/Instructions'
import Step from '../components/Step'

import { Link } from 'react-router-dom'

export default class One extends Component {
  render() {
    return (
<div>
<div className="row">
  <div className="col-sm-4 instructions-container">
    <div className="text scroll">
      <Instructions title="What is Redux?">
        <Step title="This is what Redux is"></Step>
        <Step title="This is not what Redux is"></Step>
        <Step title="Actions, Reducers, Store"></Step>
        <Step title="When to use?"></Step>
      </Instructions>
    </div>  
  </div>

  <div className="col-sm-8 viz-container">
    <div className="body">
      <Shape
        tooltip="The store is what holds the value of our state. It's also where our reducers lives."
        type="store"
        ShapeStyle={storeStyle}
        TipStyle={tipStyle}
        title='What is the store?'
      > Store </Shape>
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

const storeStyle = {
  store: {
    height: '200px',
    textAlign: 'center',
    color: '#fff',
    marginLeft: '392px',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'rgb(46, 196, 182)',
    borderRadius: '6px',
    background: 'pink',
    position: 'relative',
  },
}
