import React, { Component } from 'react'
import HomePage from '../pages/Homepage.jsx'
import InterestsPage from '../pages/Interests.jsx'
import WorkPage from '../pages/Work.jsx'
import ContactPage from '../pages/Contact.jsx'
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class BodyArea extends Component {
  render() {
    return(
      <div className='body'>
        <Route render={({location}) => {
          return(
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={{ enter: 600, exit: 600}}
                classNames={'slide'}
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