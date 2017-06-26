import React, { Component } from 'react';

class BottomNav extends Component {

  render() {
    const {
      container,
      arrow,
      ulContainer,
      li,
      ul
    } = BottomNavStyle

    var display = null
    return (
      <div style={container}>
        <div className="arrow">&lt;</div>
        { BottomNavStyle ? display='THIS IS TROOO' : 'false' }
        {display}
        <div style={ulContainer}>
          <ul style={ul}>
            <li style={li}></li>
            <li>asdf</li>
            <li>asdf</li>
            <li>fds</li>
            <li>fdf</li>
          </ul>
        </div>
      </div>
    );
  }
}

const BottomNavStyle = {
  container: {
    position: 'absolute',
    bottom: '-7px',
    color: "#fff",
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  arrow: {
    transform: 'rotate(90deg)'
  },
  ulContainer: {
    width: '100%',
    overflowY: 'auto'
  },
  ul: {
    lineStyle: 'none',
    display: 'flex',
  },
  li: {
    background: '#2bbd9c',
  }
}
export default BottomNav;