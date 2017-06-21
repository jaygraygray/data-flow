import React, { Component } from 'react';

import ReactTooltip from 'react-tooltip'

import '../../style.css'

class Shape extends Component {
  
  render() {
    
    const {
      children,
      tooltip,
      type,
      ShapeStyle
    } = this.props
    

    return (
      <div data-tip data-for={ children }
           style={ShapeStyle[type]}>

        <h1 style={ShapeStyle.h1}>{children}</h1>

        <span data-tip={tooltip}>{ children }</span>
      
        <ReactTooltip class="tip" id={ children }>
          
        </ReactTooltip>
      </div>
    );
  }
}


export default Shape;

