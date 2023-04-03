import React from 'react';
import { Link } from 'react-router-dom';
import './Personalwebsite.css';

function Personalwebsite() {
    const personal_website_cover = require('./../resources/personal-website-cover-cropped.png');
    const divider = require('./../resources/divider.png')
    return (
        <div className='page-container'>
            <header className='page-header'>
                <h1 className='title'>
                    Personal Website
                </h1>
                <p className='title-description'>
                    Designing and developing a website to showcase my projects and to provide information about myself.
                </p>
            </header>
            <div className='page-content'>
                <div className='portrait-container'>
                    <img src={personal_website_cover} alt="website-cover" />
                </div>
                <div className='skills'>
                    <p>
                        Skills Used
                    </p>
                </div>
                <div className='skills-description'>
                    <p>
                        Javascript | React | HTML | CSS | AWS
                    </p>
                </div>
                <div className='github'>
                    <p>
                        Github Link
                    </p>
                </div>
                <div className='github-link'>
                    <Link to='https://github.com/Wilmerlin01/personal-website' target="_blank" rel="noopener noreferrer">
                        https://github.com/Wilmerlin01/personal-website
                    </Link>
                </div>
                <div className='divider'>
                    <img src={divider} alt='divider'/>
                </div>
                <div className='project-breakdown'>
                    <p>
                        Project Breakdown
                    </p>
                    <div className='about-the-website'>
                        <p>
                            ABOUT THE WEBSITE
                        </p>
                    </div>
                    <div className='about-the-website-description'>
                        <p>
                            This website project was built using Javascript, React, HTML, CSS, and is hosted through Amazon Web Services.  Having primarily done work on the backend, I have been eager to learn more about what web development entails and so this project began as a way for me to dip my toes into the area that is frontend web development.   I’m currently utilizing what I have learned to develop a digital space to showcase my projects as well as give insight on who I am beyond my career.
                        </p>
                    </div>
                    <div className='my-vision'>
                        <p>
                            MY VISION
                        </p>
                    </div>
                    <div className='my-vision-description'>
                        <p>
                            Presently, this website highlights some of the projects I have done and contains a simple about me page.  My vision for this website is to continue expanding it beyond its current state as a simple portfolio.  As my skills grow and my interests evolve, I plan to add new pages and content that reflect my personal and professional journey.  I see this website as a stage for not only showcasing my work, but also to share my perspectives and experiences stepping into the tech industry as a new grad and how I might grow..  I hope to publish resources and tutorials that can help others learn and grow in their own careers.  Ultimately, I want to develop this website into a hub of materials others can use as inspiration as well as a journal of sorts for myself to one day look back and reminisce on my journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personalwebsite;