import React, { Component } from 'react'
import resume from '../assets/data/resume.json'
import styles from './../assets/styles/_Timeline.module.scss'
class WorkPage extends Component {
  handleWorkItem = event => {
    console.log(event)
  }
  render() {
    return(
      <div className='body-wrapper'>
        <h2>
          This is the Work page
        </h2>
        <ul className={styles.timeline}>
          {Object.values(resume).map((item) => {
            return(
              <li onClick={() => this.handleWorkItem(item)} key={item.date}>{item.title}</li>
            )                
          })}
        </ul>
      </div>
    )
  }
}

export default WorkPage