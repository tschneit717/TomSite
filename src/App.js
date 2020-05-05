import React, { Component } from 'react';
import './assets/styles/App.scss';
import './assets/styles/_Navigation.scss';
import HeaderComponent from './Header'
import BodyArea from './BodyArea'
import { HashRouter } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    icon: 'fa-home',
    id: '0'
  },
  {
    name: 'Interests',
    icon: 'fa-dice-d20',
    id: '1'
  },
  {
    name: 'Work',
    icon: 'fa-code-branch',
    id: '2'
  },
  {
    name: 'Contact',
    icon: 'fa-mobile-alt',
    id: '3'
  }
]
class App extends Component {
  state = {
    page: 'home'
  }
  handleLinkSelect = (selection) => {
    this.setState(() => ({
      page: selection.name
    }))
    console.log(selection)
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <HeaderComponent onHandleLinkSelect={this.handleLinkSelect} pages={pages}></HeaderComponent>
          <BodyArea currentPage={this.state.page}></BodyArea>
        </HashRouter>
      </div>
    );
  }
}

export default App;
