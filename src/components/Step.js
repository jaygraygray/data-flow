import React, { Component } from 'react';

class Step extends Component {

  render() {
    const {
      title,
      children
    } = this.props
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Step;