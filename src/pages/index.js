import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div className="hero"> 
        <div className="heroContent">
            <div className="heroImage"> 
                <img src={require('../images/AtleeLogo.png')} height="250px"/>
            </div>
            <div className="heroList"> 
                <ul>
                    <li><Link to="/physical/">physical</Link></li>
                    <li><Link to="/physical/">sounds</Link></li>
                    <li><Link to="/physical/">digital</Link></li>
                    <li><Link to="/physical/">visual</Link></li>
                    <li><Link to="/physical/">words</Link></li>
                </ul>
            </div>
        </div>
    </div>
)

export default IndexPage
