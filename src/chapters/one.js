import React from 'react';

import Shape from '../components/Shape'

import Instructions from '../components/Instructions'
import Step from '../components/Step'
import OverlayNav from '../components/OverlayNav'

import { Link } from 'react-router-dom'

export default function zero() {

return (
<div>
<div className="row">
  <div className="col-sm-4 instructions-container">
    <div className="text scroll">
      <Instructions title="Key Terms">
        <Step title="What is Redux?">
          <p>Redux is a library that utilizes the Flux pattern, which is a popular pattern to use while building apps with <em>component-based architecture</em>. So what does that mean?</p>
          <p>At the end of the day, Redux helps us do one thing: <em>manage the state</em> of our application. If you’re not familiar with state, worry not -- it’s described below.</p>
          <p>At the simplest level, Redux adds three things to an application: <em>Actions</em>, <em>Reducers</em>, and a <em>Store</em>. </p>
          <p>We’ll explore each of these things in turn, with simple explanations written here, and more detailed descriptions for each element on the right.</p>
          <p>Before we jump into the nitty gritty, we have to cover some key terms: Actions, Reducers, Store, View, Application State, and Events. If you’re familiar with all these terms, move on!</p>
        </Step>
        <Step title="Redux Terms">
          <p>
            <span className='ac'>Actions</span> are the movers and shakers in an app using Redux. Actions are just objects, that at minimum, have two properties: a <ac>type</ac> and a <ac>payload</ac>. 
            The payload is <ac>data</ac>, and the type is an instruction on <ac>how to handle</ac> that data.  </p>
          <p>
            <em>Reducers</em> are the heavy lifters in our app. Reducers are <em>pure functions</em>. That's it. Reducers are functions. Say it with me one more time:
            Reducers Are Just Functions. Reducers accept <em>two parameters</em>: an action object and a state object.
          </p>
          <p>
            Reducers will change state based on the <em>type</em> of our action, and it will be changed with the values passed on our <em>payload</em>. 
          </p>
          <p>
            The <em>Store</em> is what sends updated changes to our view. In order for our view to send actions or receive changes, it needs to be connected to our store.
            Inside the store is also where our reducers live, breathe, and do everything fun.
          </p>
        </Step>
        <Step title="General Terms">
          <p>
            The <em>view</em> is what the user sees and interacts with. Images, links, buttons, form fields, all that jazz. This walkthrough makes no assumptions
            about how you're serving your view, but I will in the near future release a walkthrough specifically for a React / Redux application.
          </p>
          <p>
            An <em>event</em> is created when the user interacts with the view in a particular way. A full list can be found <a href="https://developer.mozilla.org/en-US/docs/Web/Events">here</a>, 
            but the most common events you'll be handling are clicks and submits.
          </p>
          <p>
            <em>Application state</em>, or <em>state</em>, is the data your application is tracking and making changes to. 
          </p>
        </Step>
      </Instructions>
    </div>  
  </div>

  <div className="col-sm-8 viz-container">
    <div className="body">
      <Shape
        title='What is the store?'
        tooltip="The store is what holds the value of our state. It's also where our reducers lives."
        placement="left"
        type="store"
        ShapeStyle={style.store}
        TipStyle={style.tip}
      > Store </Shape>

      <Shape
        title="View who?"
        tooltip="This is what the user sees."
        placement="top"
        type="view"
        ShapeStyle={style.view}
        TipStyle={style.tip}
        > View </Shape> 

      <Shape
        title="Reducers: Heavy Lifting Functions"
        tooltip="This is where the magic of updating your state happens."
        placement="bottom"
        type="reducer"
        ShapeStyle={style.reducer}
        TipStyle={style.tip}
        > Reducer </Shape> 

      <Shape 
        title="Middleware: My Functionality, Please"
        tooltip="Middleware is optional packages that add additional functionality to existing packages. The only we'll be dealing with in this walkthrough is redux-promise-middleware"
        placement="left"
        type="middleware"
        ShapeStyle={style.middleware}
        TipStyle={style.tip}
        > Middleware </Shape>

      <Shape
        title="Actions: Just An Object"
        tooltip="These are the movers and shakers in a Redux application. These are just objects."
        placement="right"
        type="action"
        ShapeStyle={style.action}
        TipStyle={style.tip}
        > Action </Shape>

      <Shape 
        title="State of Affairs"
        tooltip="This is where all the magic is stored."
        placement="left"
        type="state"
        ShapeStyle={style.state}
        TipStyle={style.tip}
        > State </Shape>

      <Shape
        title="Event"
        tooltip="It has to start somewhere"
        placement="right"
        type="event"
        ShapeStyle={style.event}
        TipStyle={style.tip}
        > Event </Shape>

      </div>
    </div>
  </div>
  <OverlayNav startButtonDisplay="true"/>
</div>
    );
  }


//
// Positions will change every chapter, so it's best 
// they're defined in each chapter, rather than
// in the app-wide style.css
//

const style = {
  tip : {
    background: 'white'
  },
  store: {
    marginTop: '30px',
  },
  view: {
    margin: 'auto',
    marginTop: '270px',
  },
  reducer: {
    position: 'absolute',
    top: '86px',
    left: '350px',
  },
  middleware: {
    position: 'absolute',
    top: '98px',
    right: '590px'
  },
  action: {
    position: 'absolute',
    top: '260px',
    right: '390px',
  },
  state: {
    position: 'absolute',
    top: '69px',
    right: '251px',
  },
  event: {
    position: 'absolute',
    bottom: '209px',
    right: '391px',
  }
}
