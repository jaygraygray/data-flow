import React, { Component } from 'react';

import Shape from '../components/shape/Shape'

class Step1 extends Component {
  render() {

    return (
      <div className="content">
      
      <Shape
        tooltip="This sis omse other sdlfja;lo oflk  oafli 3ro slke jf"
        type="store"
        ShapeStyle={storeStyle}
      > Store </Shape>
      
      

      </div>
    );
  }
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