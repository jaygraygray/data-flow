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
      <Popover className="tip" id="tooltip" title={title}>{tooltip}</Popover>
    )

    return (


      <OverlayTrigger rootClose={true} trigger="click" placement="left" overlay={tooltipText}>
        <div className={type} style={ ShapeStyle[type] }>
          <h1>{children}</h1>
        </div>
      </OverlayTrigger>     

    );
  }
}


export default Shape;

