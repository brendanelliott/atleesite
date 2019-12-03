import React from 'react'
import Link from 'gatsby-link'
import './ProjectCard.css'

const ProjectCard = props => (
    <Link to={props.Link}>
        <div className="ProjectCard">
            <div className="ProjectImage">
                <img src={props.image} />
            </div>
            <div className="ProjectHeader">
                <p>{props.header}</p>
                <p>{props.subheader}</p>
            </div>
        </div>
    </Link>
)

export default ProjectCard