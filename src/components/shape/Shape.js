import React, { Component } from 'react';

import { Popover, OverlayTrigger } from 'react-bootstrap'

import '../../style.css'

class Shape extends Component {
  
  render() {
    
    const {
      children,
      tooltip,
      type,
      ShapeStyle,
      title,
      TipStyle
    } = this.props
    
    const tooltipText = (
      <Popover style={TipStyle} id="tooltip" title={title}>{tooltip}</Popover>
    )

    console.log(ShapeStyle)

    return (


      <OverlayTrigger rootClose={true} trigger="click" placement="left" overlay={tooltipText}>
        <div style={ShapeStyle[type]}>
          <h1>{children}</h1>
        </div>
      </OverlayTrigger>     

    );
  }
}


export default Shape;

