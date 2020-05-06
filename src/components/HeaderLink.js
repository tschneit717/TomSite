import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderLink = props => {
  const handleLinkSelect = event => {
    props.onLinkSelect(event)
  }
  let pageName = (props.page.name === 'Home') ? "" : props.page.name
  return (
    <li><i className={"fas " + props.page.icon}></i><NavLink to={"/" + pageName.toLowerCase()} onClick={() => handleLinkSelect(props) }className='menu-title'>{props.page.name}</NavLink></li>
  )
}

export default HeaderLink