import React, { Component } from 'react'
import HomePage from '../pages/Homepage'
import InterestsPage from '../pages/Interests'
import WorkPage from '../pages/Work'
import ContactPage from '../pages/Contact'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class BodyArea extends Component {
  state = {
    display: false,
  };

  toggle = () => {
    this.setState(prevstate => ({
      display: !prevstate.display,
    }));
  };
  render() {
    return(
      <div className='body-wrapper'>
        <button onClick={()=>{this.toggle()}}></button>
        <Route exact path="/" component={HomePage}/>
        <Route path="/interests" component={InterestsPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/work" component={WorkPage} />
      </div>
    )
  }
}

export default BodyArea