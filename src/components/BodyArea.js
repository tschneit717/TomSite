import React, { Component } from 'react'
import HomePage from '../pages/Homepage'
import InterestsPage from '../pages/Interests'
import WorkPage from '../pages/Work'
import ContactPage from '../pages/Contact'
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class BodyArea extends Component {
  render() {
    return(
      <div className='body-wrapper'>
        <Route render={({location}) => {
          const {pathname, key} = location
          return(
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={{ enter: 300, exit: 300}}
                classNames={'fade'}
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/interests" component={InterestsPage}/>
                  <Route path="/contact" component={ContactPage}/>
                  <Route path="/work" component={WorkPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )
        }}/>
      </div>
    )
  }
}

export default withRouter(BodyArea);