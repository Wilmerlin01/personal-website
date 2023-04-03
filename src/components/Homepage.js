import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const personal_website_cover = require('./resources/personal-website-cover-cropped.png');

    return (
    <div className="page-container">
        <div className="introduction">
            <div className="introduction-content">
                <div className="introduction-content-header-container">
                    <h1 className="introduction-content-header">
                    Hi, I'm Wilmer!
                    </h1>
                </div>
                <div className="introduction-content-body-container">
                    <p className="introduction-content-body">
                    As a Software Developer, I have a passion for creating innovative and user-friendly software that makes people's lives easier. With a background in computer science and informatics, I strive to build modern applications that help solve real-world problems and improve the human experience.
                    </p>
                </div>
            </div>
        </div>
        <Link to="/personal-website" className="project-container">
            <div className='cover-image-container'>
                <img src={personal_website_cover} alt="personal_website_cover" /> 
            </div>
            <div className='details-container'>
                <div className='details-inner'>
                    <div className='details-title'>
                        <p>
                            Personal Website
                        </p>
                    </div>
                    <div className='details-description'>
                        <p>
                        Designing and developing a website to showcase my projects and to provide information about myself.
                        </p>
                    </div>
                    <div className='details-skills'>
                        Skills Used
                    </div>
                    <div className='details-skills-content'>
                        Javascript | React | HTML | CSS | AWS
                    </div>
                </div>
            </div>
        </Link>
    </div>
    );
}

export default Homepage;