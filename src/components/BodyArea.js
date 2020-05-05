import React, { Component } from 'react'
import HomePage from '../pages/Homepage'
import InterestsPage from '../pages/Interests'
import WorkPage from '../pages/Work'
import ContactPage from '../pages/Contact'
import { Route } from 'react-router-dom'

class BodyArea extends Component {
  checkPage = currentPage => {
    
  }
  render() {
    return(
      <div className='body-wrapper'>
        <Route exact path="/" component={HomePage}/>
        <Route path="/interests" component={InterestsPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/work" component={WorkPage} />
      </div>
    )
  }
}

export default BodyArea