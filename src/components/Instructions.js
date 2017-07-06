import React, { Component } from 'react';

import '../style.css'

import { Panel } from 'react-bootstrap'
import Menu from './Menu'

class Instructions extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        panelOpen: false
      }
    
  }
  render() {
   const {
      title,
      children
    } = this.props
    //---------------------------
    // include prop for displaying links to each step
    // ---------------------------
    
    const chapterNav = children.map((link,i) => {
      return (<li key={i}>
              <a href={`#${link.props.title}`}>{link.props.title}</a>
              </li>)
    })

    return (

      <div style={{position: 'relative'}}>
          
          <div id="top" className="title-container">
            <h1 className="title">{title}</h1> 
          </div>

          <div className="effect6">
          <div className="open-steps-panel"
              onClick={ () =>  { this.setState({ panelOpen: !this.state.panelOpen})} }>
            Chapter Contents
          </div>
          <Panel collapsible expanded={this.state.panelOpen}>
            <ol>
              {chapterNav}
            </ol>
          </Panel>
          </div>

          {children}
      
      </div>
      

      

    );
  }
}

export default Instructions;