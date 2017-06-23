import React, { Component } from 'react';

import '../../style.css'

class Instructions extends Component {
  render() {
   const {
      title,
      children
    } = this.props
    return (
      
      <div>
        <div className="col-sm-4 instructions-container">
          <div className="text scroll">
          <div className="title-container">
            <h1 className="title">{title}</h1> 
          </div>
          {children}
          </div>
        </div>  
      </div>
    );
  }
}

export default Instructions;