import React from 'react';

export default function menu() {

    return (
      <div style={style.menuContainer}>
        <ul style={style.listContainer}>
          <li><img style={style.img} src={require('../images/home.svg')}/></li>
          <li><img style={style.img} src={require('../images/github-logo.svg')}/></li>
          <li><img style={style.img} src={require('../images/linkedin-logo.svg')}/></li>
          <li><img style={style.img} src={require('../images/devmtn-white.png')}/></li>
        </ul>
      </div>
    );
  }


const style = {
  menuContainer: {
    margin: 'auto',
    width: '100%',
    background: '#232a35'
  },
  listContainer: {
    listStyle: 'none',
    display: 'flex',
    fledDirection: 'space-between',
    width: '100%',
  },

  img: {
    width: '32px',
    height: '32px',
    marginRight: '32px',
  }
}
