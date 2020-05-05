import React, { Component } from 'react'
import HeaderLink from './HeaderLink'

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.state = {page: 'home'}
  }
  handlePageSelect(selection) {
    this.props.onHandleLinkSelect(selection.page)
  }
  render() {
    return (
      <div className='navigation'>
        <div className='title-area'>
          <h1 className='site-title'>Tom's Site</h1>
        </div>
        <nav>
          <ul>
            {this.props.pages.map((page) => (
              <HeaderLink key={page.id} onLinkSelect={this.handlePageSelect} page={page}></HeaderLink>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default HeaderComponent