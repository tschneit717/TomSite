import React from "react"

class NameField extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    location: ''
  }
  handleChange(event) {
    console.log(this, event.target.value)
    this.state.setState(event => ({name: event.target.value}));
  }
  render() {
    console.log(this)
    return(
      <div>
        <input value={this.state.name} onChange={ (e) => this.handleChange} name='namefield'></input>
      </div>
    )
  }
}

export default NameField