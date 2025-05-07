import React from 'react';
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import ImageGallery from '../components/ImageGallery.jsx'; // Import the ImageGallery component

import portfolio1 from '../assets/project-pictures/resume-rocket/portfolio-1.png';
import portfolio2 from '../assets/project-pictures/resume-rocket/portfolio-2.png';
import portfolio3 from '../assets/project-pictures/resume-rocket/portfolio-3.png';
import portfolio4 from '../assets/project-pictures/resume-rocket/portfolio-4.png';


const ResumeRocketPage = () => {

        // Array of image URLs
        const portfolioImageUrls = [portfolio1, portfolio2, portfolio3, portfolio4];


    return (
        <div className="project-page-root">
            <div className="project-page-header project-page-section-sizing">
                <div className="project-page-header-top-part">
                    <h1>Resume Rocket</h1>
                    <h2>Website, Senior Capstone Project</h2>
                    <h2>Jan 2024 - Dec 2024</h2>
                </div>
                <p>
                    Today&apos;s job market is tough. Getting past resume filtering software, building a network, and 
                    separating yourself from the competition can be overwhelming. Enter Resume Rocket, a comprehensive 
                    tool designed to help job seekers improve their chances of landing their dream job. The site provides 
                    users with a resume tailoring service, portfolio builder, and networking opportunities, all in one place.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2>Resume Tailoring</h2>
                <p>
                    Users can get suggestions for their resume for a specific job posting either by using a URL for their desired job posting on the applications section of the resume page, or by using our browser extension on the page with the job application. These suggestions can be viewed and applied by clicking on their associated resume for each application in the applications section of the resume page.
                    After making changes to a resume, users can save that resume as a version to refer to later.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2>Portfolio Builder</h2>
                <p>
                    Users can create a personal portfolio to dynamically display projects they have worked on. These portfolios can be customized and there are a variety of sections to choose from to add content to each project.
                    A unique URL is provided for the portfolio enabling users to include it on any job application, so that companies can easily view their portfolio.
                </p>
                <ImageGallery _imageUrls={portfolioImageUrls} />                
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2>User Networking</h2>
                <p>
                    The networking page shows all users of the site, some details about them, and each user&apos;s resume and portfolio if provided. These can be searched for with the search bar.
                    Users can message and interact with each other via our messaging feature.
                </p>
            </div>
        </div>
    );
};

export default ResumeRocketPage;