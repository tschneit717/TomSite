import React from "react"

class NameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      location: 'name'
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(this.state.location)
    if(this.state.location === 'name') {
      this.setState({name: event.target.value});
    } else if(this.state.location === 'email') {
      this.setState({email: event.target.value});
    } else if(this.state.location === 'message') {
      this.setState({message: event.target.value});
    }
  }
  nextPhase = (event) => {
    event.preventDefault()
    if(this.state.location === 'name') {
      this.setState({location: 'email'});
    } else if(this.state.location === 'email') {
      this.setState({location: 'message'});
    } else if(this.state.location === 'submit') {
      console.log('done')
    }
  }
  backPhase = (event) => {
    event.preventDefault()
    if(this.state.location === 'email') {
      this.setState({location: 'name'});
    } else if(this.state.location === 'message') {
      this.setState({location: 'email'});
    } else if(this.state.location === 'submit') {
      this.setState({location: 'message'});
    }
  }
  render() {
    console.log(this.state)
    if(this.state.location === 'name') {

    }
    return(
      <div>
        <p>Enter your {this.state.location}</p>
        <button className="back-button" type="button" onClick={(event) => this.backPhase(event)}><i class="fas fa-chevron-left"></i></button>
        <input value={this.state.name} onChange={this.handleChange} name='namefield'></input>
        <button className="next-button" type="button" onClick={(event) => this.nextPhase(event)}><i class="fas fa-chevron-right"></i></button>
        <button className="submit-button" type="button" onClick={(event) => this.submit()}></button>
      </div>
    )
  }
}

export default NameField