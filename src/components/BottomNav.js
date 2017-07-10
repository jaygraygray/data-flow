import React, { Component } from 'react';

import { Panel } from 'react-bootstrap'

import { StyleSheet, css } from 'aphrodite'

class BottomNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panelStatus: false
    }
  }

  render() {

    const {
      container,
      arrow,
      ulContainer,
      li,
      ul
    } = BottomNavStyle

    return (
      <div className={css(container)}>
          <div className={css(arrow)}
                onClick={ () => {this.setState({panelStatus: !this.state.panelStatus }) } }> &lt;
          </div>
          <Panel bsClass="bottonNavPanel" collapsible expanded={this.state.panelStatus}> 
            <div className={css(ulContainer)}
                 onClick={ () => {this.setState({panelStatus: !this.state.panelStatus })}}>
              <ul className={css(ul)}>
                <li className={css(li)}>What is Redux?</li>
                <li className={css(li)}>Actions, Stores, Reducers, Oh My!</li>
                <li className={css(li)}>User Events</li>
                <li className={css(li)}>Actions: Creators, Types, Payloads</li>
                <li className={css(li)}>Dispatching Actions to Reducers</li>
                <li className={css(li)}>Reducer Madness</li>
                <li className={css(li)}>Reducer Madness: Extended</li>
                <li className={css(li)}>New State, New View, New You</li>
              </ul>
            </div>
          </Panel>
          
      </div>
    );
  }
}

const BottomNavStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '-7px',
    color: "#fff",
    width: '100%',
  },
  arrow: {
    transform: 'rotate(90deg)',  
    padding: '24px 4px 24px 18px',
    borderRadius: '6px 0 0 6px',
    background: '#1d949a',
    maxWidth: '56px',
    margin: 'auto',
    marginBottom: '-15px',
    transition: 'all .2s',
     ':hover': {
      padding: '24px 8px 24px 14px',
      transition: 'all .2s',
    }
  },
  
  ulContainer: {
    width: '100%',
    overflowY: 'auto',
    background: '#1d949a',
    padding: '12px',
    marginBottom: '-5px'
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'space-around',
    margin: '0',
    padding: '0'
  },
  li: {
    margin: '0',
    padding: '18px 12px 18px 12px',
    borderWidth: '0 0 12px 0',
    borderColor: '#1d949a',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: '1.1rem',
    transition: 'all .2s',

      ':hover': {
        transition: 'all .2s',
        textShadow: '1px 1px 1px #000',
        borderWidth: '0 0 12px 0',
        borderColor: '#2bbd9c',
        borderStyle: 'solid'
      }
  }
})


export default BottomNav;