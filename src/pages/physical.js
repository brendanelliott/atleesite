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
                <Link to="/physical" style={Styles}>- **physical**</Link>
                <Link to="/sounds">- sounds</Link>
                <Link to="/digital">- digital</Link>
                <Link to="visual">- visual</Link>
                <Link to="/words">- words</Link>
            </div>
        </div>
        <div className="ProjectGrid">
            <div className="CardGrid">
                <ProjectCard 
                    header="&nbsp;# backpack 02"
                    subheader="## project date"
                    image={require('../images/backpack02.png')}
                    Link="/backpack02"
                />
                <ProjectCard 
                    header="&nbsp;# fannypack 01"
                    subheader="## project date"
                    image={require('../images/pack01.png')}
                    Link="/backpack02"
                />
                <ProjectCard 
                    header="&nbsp;# best brand crewneck"
                    subheader="## project date"
                    image={require('../images/mickeycrew.png')}
                    Link="/backpack02"
                />
                <ProjectCard 
                    header="&nbsp;# backpack 01"
                    subheader="## project date"
                    image={require('../images/backpack01.png')}
                    Link="/backpack02"
                />
            </div>
        </div>
    </div>
)
