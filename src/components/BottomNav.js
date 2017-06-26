import React, { Component } from 'react';

class BottomNav extends Component {
  render() {
    const {
      container
    } = BottomNavStyle
    return (
      <div className="bottomNavContainer">
        <div className="row">
          <div className="col-sm-4">&nbsp;</div>
          <div className="col-sm-8">


            I am NavBar.


          </div>
        </div>
      </div>
    );
  }
}

const BottomNavStyle = {
  container: {
    position: 'absolute',
    bottom: '0'
  }
}

export default BottomNav;