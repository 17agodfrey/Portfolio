import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const siteLink="https://datefinder.lol"
const githubLink="https://github.com/17agodfrey/DateFinder"

const WhatDoPage = () => {
    const rootRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
    if (rootRef.current) {
        window.scrollTo(0, 0);
    }
    }, [location]);


    return (
        <div className="project-page-root" ref={rootRef}>
            <div className="project-page-header project-page-section-sizing">
                <div id='back-button-container'>
                    <button id="back-button" onClick={() => window.history.back()}>
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
                        <a href={siteLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                            <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                <LanguageIcon className="project-card-link-icon" alt={`go to WhatDo site`} />
                                <p>Deployed Site</p>
                            </div>
                        </a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                            <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                <GitHubIcon className="project-card-link-icon" alt={`go to WhatDo Github`} />
                                <p>Github Repository</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p>
                    Have you ever spent too much time looking for something to do on Google Maps? A date, an activity with friends, or a family outing? Constantly having to type in different 
                    keywords and locations? Datefinder is a web application that allows you to see map results for multiple types of activities at once, and filter according to your preferences.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Idea Generation</h2>
                <p>
                    To generate activity ideas, users will select multiple parameters such as location, indoor/outdoor, activity level, and duration. This will give a list of activities that match the user&apos;s selections. 
                    Users will then be able to choose the activites they wish to see results for.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Map View</h2>
                <p>
                    Using Google Maps Javascript API, the site displays an interactable map with color coded markers for each activity. Also displayed is a list view of the activities, with 
                    general information about each one. Clicking on an activity will show an image gallery dialog. 
                </p>

                {/* <ImageGallery _imageUrls={portfolioImageUrls} />                 */}

            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Result Filtering</h2>
                <p>
                    To narrow down results, users can further filter by price and rating, and select/deselect activity types- all of which will update the map and list view. Finally, new searches can be made with the 
                    &aposNew Search&apos; button, which will reset the map and list view to the original state.
                </p>
            </div>
        </div>
    );
};

export default WhatDoPage;