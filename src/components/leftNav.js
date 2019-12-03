import React from 'react'
import Link from 'gatsby-link'
import './leftNav.css'

const leftNav = () => (
    <div className="Nav"> 
        <div className='NavList'>
            <Link to="/physical">- physical</Link>
            <Link to="/physical">- sounds</Link>
            <Link to="/physical">- digital</Link>
            <Link to="/physical">- visual</Link>
            <Link to="/physical">- words</Link>
            <Link to="/physical">- shop</Link>
        </div>
    </div>
)

export default leftNav
