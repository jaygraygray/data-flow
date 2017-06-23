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
          <div className="title-container">
            <h1 className="title">{title}</h1> 
          </div>
          
          {children}
          
      </div>

    );
  }
}

export default Instructions;