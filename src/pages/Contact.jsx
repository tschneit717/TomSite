import React, { Component } from 'react'
import NameField from '../components/ContactField'

class ContactsPage extends Component {
  state = {
    formData: {
      location: "name",
      name: "",
      email: "",
      message:""
    }
  }
  handleNameEntry(name) {
    this.setState(() => ({
      name: name
    }))
    console.log(this)
  }
  render() {
    return(
      <div className='body-wrapper'>
        <h2>
          This is the Contacts page
        </h2>
        <form>
          <NameField onNameEntry={this.handleNameEntry} ></NameField>
        </form>
      </div>
    )
  }
}

export default ContactsPage