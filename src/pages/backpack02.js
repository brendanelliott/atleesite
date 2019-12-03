import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/project.css'
import '../components/leftNav'
import '../components/ProjectCard'


export default () => (
    <div>
        <Header />
        <div className="Nav"> 
            <div className='NavList'>
                <Link to="/physical" activeClassName="CurrentMedium">- **physical**</Link>
                <Link to="/">- sounds</Link>
                <Link to="/">- digital</Link>
                <Link to="/">- visual</Link>
                <Link to="/">- words</Link>
                <Link to="/">- shop</Link>
            </div>
        </div>
        {/* <LeftNav /> */}
        <div className="ProjectDisplay">
            <div className="ImageGrid">
                <img src={require("../images/backpack02.png")} />
            </div>
            <div className="ProjectInfo">
                <h1>&nbsp;# backpack 02</h1>
                <h1>## project date</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    </div>
)
