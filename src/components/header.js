import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderContent">
      <div className="HeaderTitle">
        <p>&nbsp;# atlee design</p>
        <p>## working on something</p>
      </div>
      <div className="HeaderImage">
        <Link to="/"><img src={require('../images/AtleeLogo.png')} height="75px"/></Link>
      </div>
      <div className="Dropdown">
        <Link to="/"><img src={require('../images/dropdown.png')} height="24px"/></Link>
      </div>
    </div>
  </div>
)

export default Header
