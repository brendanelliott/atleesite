import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import ProjectCard from '../components/ProjectCard'
import '../layouts/medium.css'
import '../components/ProjectCard'

const Styles = {   
    fontWeight: '700',
}

export default () => (
    <div>
        <Header />
        <div className="Nav"> 
            <div className='NavList'>
                <Link to="/physical">- physical</Link>
                <Link to="/sounds">- sounds</Link>
                <Link to="/digital">- digital</Link>
                <Link to="/visual" style={Styles}>- **visual**</Link>
                <Link to="/words">- words</Link>
            </div>
        </div>
        <div className="EmptyState">
            <p>&nbsp;# working on visuals</p>
            <p>## coming</p>
        </div>
    </div>
)
