import React from 'react';
import { useState } from 'react';
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import ImageGallery from '../components/ImageGallery.jsx'; // Import the ImageGallery component
import GalleryPreview from '../components/GalleryPreview.jsx';

import about from '../assets/project-pictures/resume-rocket/about.png';
import link from '../assets/project-pictures/resume-rocket/link.png';
import color from '../assets/project-pictures/resume-rocket/color.png';
import projects from '../assets/project-pictures/resume-rocket/projects.png';
import mm1 from '../assets/project-pictures/resume-rocket/mm1.png';
import mm2 from '../assets/project-pictures/resume-rocket/mm2.png';
import mm3 from '../assets/project-pictures/resume-rocket/mm3.png';
import mm4 from '../assets/project-pictures/resume-rocket/mm4.png';
import mm5 from '../assets/project-pictures/resume-rocket/mm5.png';
import mm6 from '../assets/project-pictures/resume-rocket/mm6.png';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';



const DateFinderPage = () => {

    const portfolioImageUrls = [about, link, color, projects, mm1, mm2, mm3, mm4, mm5, mm6];
    const [imageGalleryOpen, setImageGalleryOpen] = useState(false);



    return (
        <div className="project-page-root">
            <div className="project-page-header project-page-section-sizing">
                <div className="project-page-header-top-part">
                    <h1 className="fancy-color-text-orange-red">DateFinder</h1>
                    <h3>Website, Personal Project</h3>
                    <h3>May 2024 - Dec 2024</h3>
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

export default DateFinderPage;