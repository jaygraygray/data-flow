import React, { Component } from 'react';

import ReactTooltip from 'react-tooltip'

import ShapeStyle from '../../ShapeStyles0'

class Shape extends Component {
  
  render() {
    
    const {
      children,
      tooltip,
      style,
      step
    } = this.props

    // use this to set what Step the shape will be used in
    //const stylePath = `./
    console.log(ShapeStyle)
    return (
      <div data-tip data-for={ children }
           style={ShapeStyle.store}>

        <h1 style={ShapeStyle.h1}>{children}</h1>



        <ReactTooltip id={ children }>
          <span>{ tooltip }</span>
        </ReactTooltip>
      </div>
    );
  }
}


export default Shape;

/*

<Shape css={filepath}
      hoverModal={dataForModal}
      clickModal={dataForClickModal}> Store 
</Shape>


*/