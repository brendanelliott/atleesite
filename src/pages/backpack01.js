import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/project.css'
import '../components/leftNav'
import '../components/ProjectCard'

const Styles = {   
    fontWeight: '700',
}

export default () => (
    <div>
        <Header />
        <div className="Nav"> 
            <div className='NavList'>
                <Link to="/physical" style={Styles}>- **physical**</Link>
                <Link to="/sounds">- sounds</Link>
                <Link to="/digital">- digital</Link>
                <Link to="visual">- visual</Link>
                <Link to="/words">- words</Link>
            </div>
        </div>
        {/* <LeftNav /> */}
        <div className="ProjectDisplay">
            <div className="ImageGrid">
                <img src={require("../images/backpack01.jpg")} />
            </div>
            <div className="ProjectInfo">
                <h1>&nbsp;# backpack 01</h1>
                <h1>## 2017</h1>
                <p>cotton canvas, leather, foam, used leather belt </p>
            </div>
        </div>
    </div>
)