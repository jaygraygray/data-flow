import React, { Component } from 'react';

import Shape from '../components/shape/Shape'


class Step1 extends Component {
  render() {

    return (
  
      <div>
      
      <Shape
        tooltip="The store is what holds the value of our state. It's also where our reducers lives."
        offsetLeft="-800"
        offsetTop="-400"
        type="store"
        ShapeStyle={storeStyle}
        TipStyle={tipStyle}
        title='What is the store?'
      > Store </Shape>
      
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

export default Step1;