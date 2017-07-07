import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import {StyleSheet, css} from 'aphrodite'

class OverlayNav extends Component {
  constructor() {
    super()
    this.state ={
      buttonStatus: false
    }
    this.MenuAction = this.MenuAction.bind(this)
  }

  MenuAction() {
    this.setState({ buttonStatus: !this.state.buttonStatus })
  }
  render() {
    const {
      startButtonDisplay // display menu or home button
    } = this.props

    const {
      home,
      close,
      img
    } = style
    return (
      <div>
        <div className="row overlay">
          <div className="col-sm-4">&nbsp;</div>
              
               {
                 this.state.buttonStatus ? 
                 <div className={css(home)} >
                  <img className={css(img)} src={require('../images/home.svg')} 
                  onClick={ this.MenuAction }/>
                 </div> 
                 : 
               <div></div>
               }
              

              {
                this.state.buttonStatus ? null : 
              
            <div className="col-sm-8 overlay-content">
              <Link to="step1">
                <div className="section effect7"><span className="num">1</span> <span className="section-text">Redux Terms</span></div>
              </Link>
              <div className="section effect7"><span className="num">2</span> <span className="section-text">Actions, Stores, Reducers, Oh My!</span></div>
              <div className="section effect7"><span className="num">3</span> <span className="section-text">User Events</span></div>
              <div className="section effect7"><span className="num">4</span> <span className="section-text">Actions: Creators, Types, Payloads</span></div>
              <div className="section effect7"><span className="num">5</span> <span className="section-text">Dispatching Actions to Reducers</span></div>
              <div className="section effect7"><span className="num">6</span> <span className="section-text">Reducer Madness</span></div>
              <div className="section effect7"><span className="num">7</span> <span className="section-text">Reducer Madness: Extended</span></div>
              <div className="section effect7"><span className="num">8</span> <span className="section-text">New State, New View, New You</span></div>
              </div>
              
              }
              {
                startButtonDisplay=='true' ?  <Link to="step1"><a href="#" className="start"> Start &nbsp; &gt; </a></Link> : null
              }
            </div>
</div>
    );
  }
}

const style = StyleSheet.create({
  close : {
    position: 'fixed',
    bottom: '30px',
    left: '886px',
    zIndex: '2',
    opacity: '.5',
    transition: 'all .2s',

    ':hover': {
      opacity: '1',
      transition: 'all .2s'
    }
  },
  home : {
    position: 'fixed',
    bottom: '30px',
    left: '886px',
    opacity: '.5',
    transition: 'all .2s',

    ':hover': {
      opacity: '1',
      transition: 'all .2s'
    }
  },
  img : {
    width: '32px',
  }
})
export default OverlayNav;