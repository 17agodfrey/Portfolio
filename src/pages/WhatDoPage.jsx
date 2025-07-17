import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import IdeaGenerationVideo from '../assets/project-pictures/whatdo/IdeaGenerationVideo.mp4'
import MapViewVideo from '../assets/project-pictures/whatdo/MapViewVideo.mp4'
import ResultFilteringVideo from '../assets/project-pictures/whatdo/ResultFilteringVideo.mp4'



const siteLink="https://whatdo.online"
const githubLink="https://github.com/17agodfrey/WhatDo"

const WhatDoPage = () => {
    const rootRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    if (rootRef.current) {
        window.scrollTo(0, 0);
    }
    }, [location]);


    return (
        <div className="project-page-root" ref={rootRef}>
            <div className="project-page-header project-page-section-sizing">
                <div id='back-button-container'>
                    <button id="back-button" onClick={() => navigate("/") }>
                        <div className="hz-center" style={{gap: '.5rem'}}>
                            <ArrowBackIcon style={{ fontSize: '2rem', color: 'var(--purple-color)' }} />
                            <p className="back-button-text" style={{fontSize:"16px"}}>Back</p>
                        </div>
                    </button>
                </div>
                <div className="project-page-header-top-part">
                    <h1 className="fancy-color-text-orange-red">WhatDo</h1>
                    <h3>Website, Personal Project</h3>
                    <h3>May 2024 - Dec 2024</h3>

                    <div className="hz-left-top project-page-links" style={{gap: '1rem'}}>
                        <div>
                            <a href={siteLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                    <LanguageIcon className="project-card-link-icon" alt={`go to WhatDo site`} />
                                    <p>Deployed Site</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                    <GitHubIcon className="project-card-link-icon" alt={`go to WhatDo Github`} />
                                    <p>Github Repository</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    Have you ever spent too much time looking for something to do on Google Maps? A date, an activity with friends, or a family outing? Constantly having to type in different 
                    keywords and locations? WhatDo is a web application that allows you to see map results for multiple types of activities at once, and filter according to your preferences.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Idea Generation</h2>
                <p>
                    To generate activity ideas, users will select multiple parameters such as location, indoor/outdoor, activity level, and duration. This will give a list of activities that match the user&apos;s selections. 
                    Users will then be able to choose the activites they wish to see results for.
                </p>
                <video
                    src={IdeaGenerationVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
                >
                    Error: Your browser does not support the video tag.
                </video>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Map View</h2>
                <p>
                    Using Google Maps Javascript API, the site displays an interactable map with color coded markers for each activity. Also displayed is a list view of the activities, with 
                    general information about each one. Clicking on an activity will show an image gallery dialog. 
                </p>
                <video
                    src={MapViewVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
                >
                    Error: Your browser does not support the video tag.
                </video>

            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Result Filtering</h2>
                <p>
                    To narrow down results, users can further filter by price and rating, and select/deselect activity types- all of which will update the map and list view. Finally, new searches can be made with the 
                    &aposNew Search&apos; button, which will reset the map and list view to the original state.
                </p>
                <video
                    src={ResultFilteringVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
                >
                    Error: Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default WhatDoPage;