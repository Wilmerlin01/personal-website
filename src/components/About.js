import React from 'react';
import './About.css';

function About() {
    const portrait = require('./resources/portrait.jpg');

    const japan = require('./resources/japan.png')
    const back = require('./resources/back.png')
    const huangshan = require('./resources/huangshan.png')
    const pannacotta = require('./resources/pannacotta.png');
    const bonemarrow = require('./resources/bonemarrow.png');
    const bingsu = require('./resources/bingsu.png')

    return (
        <div className='page-container'>
            <header className='page-header'>
                <h1 className='title'>
                    About
                </h1>
                <p className='title-description'>
                    Read below to learn more about me and my journey in computer science!
                </p>
            </header>
            <div className='page-content'>
                <div className='portrait-container'>
                    <img src={portrait} alt="portrait" />
                </div>
                <div className='about-container'>
                    <p className='about'>
                        As a fourth-year Computer Science student, I am passionate about leveraging technology to solve complex problems. I have had the opportunity to work on setting up data pipelines from start to finish, including pipeline filters, query systems, monitoring and logging systems, and notification services. This experience helped me develop a deeper understanding of data management and processing.
                    </p>
                    <p className='about'>
                    With experience in Kubernetes, AWS, and a variety of backend languages, I am particularly interested in developing innovative solutions that make a positive impact on society. As I near the end of my academic journey, I am excited to take the next steps in my career and continue to develop my skills as a software developer.
                    </p>
                </div>
                <div className='background-container'>

                </div>
                <div className='subtitle-container'>
                    <div className='subtitle'>
                        <p>
                            Other tidbits
                        </p>
                    </div>
                </div>
                <div className='subtitle-container'>
                    <div className='subtitle-description'>
                        <p>
                            In my spare time, I like to travel and explore new foods
                        </p>
                    </div>
                </div>
                <div className='media-container'>
                    <div className='media-grid'>
                        <div className='img'>
                            <img src={japan} alt="japan" />
                        </div>
                        <div className='img'>
                            <img src={back} alt="back" />
                        </div>
                        <div className='img'>
                            <img src={huangshan} alt="huangshan" />
                        </div>
                        <div className='img'>
                            <img src={pannacotta} alt="pannacotta" />
                        </div>
                        <div className='img'>
                            <img src={bonemarrow} alt="bonemarrow" />
                        </div>
                        <div className='img'>
                            <img src={bingsu} alt="bingsu" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;