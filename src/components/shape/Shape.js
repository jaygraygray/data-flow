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
      TipStyle,
      placement,
    } = this.props


    const tooltipText = (
      <Popover
              className="tip" 
              style={TipStyle} 
              id="tooltip" 
              title={title}
              >{tooltip}</Popover>)
    return (
      <OverlayTrigger placement={placement} 
                      rootClose={true} 
                      trigger="click" 
                      overlay={tooltipText}>

        <div className={type} style={ShapeStyle}>
          <h1>{children}</h1>
        </div>
      </OverlayTrigger>     

    );
  }
}


export default Shape;

