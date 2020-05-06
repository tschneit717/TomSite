import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    console.log(this)
    return(
      <div className="">
        <h2>
          Hello, welcome to my site!
        </h2>
        <p>
          My name is Tom Schneider, I am a developer from Columbus, OH. 
        </p>
      </div>
    )
  }
}

export default HomePage