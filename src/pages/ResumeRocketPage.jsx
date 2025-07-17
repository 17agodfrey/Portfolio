import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import ImageGallery from '../components/ImageGallery.jsx'; // Import the ImageGallery component
import GalleryPreview from '../components/GalleryPreview.jsx';

import ps1 from '../assets/project-pictures/resume-rocket/screenshots/ps1.png';
import ps2 from '../assets/project-pictures/resume-rocket/screenshots/ps2.png';
import ps3 from '../assets/project-pictures/resume-rocket/screenshots/ps3.png';
import ps4 from '../assets/project-pictures/resume-rocket/screenshots/ps4.png';
import ps5 from '../assets/project-pictures/resume-rocket/screenshots/ps5.png';
import ps6 from '../assets/project-pictures/resume-rocket/screenshots/ps6.png';
import ps7 from '../assets/project-pictures/resume-rocket/screenshots/ps7.png';
import ps8 from '../assets/project-pictures/resume-rocket/screenshots/ps8.png';
import ps9 from '../assets/project-pictures/resume-rocket/screenshots/ps9.png';

import AccountCreationVideo from '../assets/project-pictures/resume-rocket/videos/AccountCreation_Edited.mp4';
import ResumeSuggestionsVideo from '../assets/project-pictures/resume-rocket/videos/Resume-Suggestions-EDITED.mp4';
import ExtensionVideo from '../assets/project-pictures/resume-rocket/videos/Extension-EDITED.mp4';
import AI_ChatVideo from '../assets/project-pictures/resume-rocket/videos/AI Chat-EDITED.mp4';
import NetworkingVideo from '../assets/project-pictures/resume-rocket/videos/Networking.mp4'



import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
// import GithubIcon from '../assets/navbar/github-brands-solid.svg?react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const siteLink="https://resume-rocket.online/login-demo"
const githubLink="https://github.com/orgs/ResumeRocket-PM/repositories"

const ResumeRocketPage = () => {

    const portfolioImageUrls = [ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9];
    const [imageGalleryOpen, setImageGalleryOpen] = useState(false);

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
                    <h1 className="fancy-color-text-orange-red">Resume Rocket</h1>
                    <h3>Website, Senior Capstone Project</h3>
                    <h3>Jan 2024 - Dec 2024</h3>

                    <div className="hz-left-top project-page-links" style={{gap: '1rem'}}>
                        <div>
                            <a href={siteLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                    <LanguageIcon className="project-card-link-icon" alt={`go to ResumeRocket site`} />
                                    <p>Visit Live Site</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                    <GitHubIcon className="project-card-link-icon" alt={`go to ResumeRocket Github`} />
                                    <p>Github Repository</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>



                <p>
                    Today&apos;s job market is tough. Getting past resume filtering software, building a network, and 
                    separating yourself from the competition can be overwhelming. Enter Resume Rocket, a comprehensive 
                    tool designed to help job seekers improve their chances of landing their dream job. The site provides 
                    users with a resume tailoring service, portfolio builder, and networking opportunities, all in one place.
                </p>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">Resume Tailoring</h2>
                <p>
                    Users can get suggestions for their resume for a specific job posting either by using a URL for their desired job posting on the applications section of the resume page, or by using our browser extension on the page with the job application. These suggestions can be viewed and applied by clicking on their associated resume for each application in the applications section of the resume page.
                    After making changes to a resume, users can save that resume as a version to refer to later.
                </p>

                <h4>Browser Extension</h4>
                <video
                    src={ExtensionVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
                >
                    Error: Your browser does not support the video tag.
                </video>

                <h4>Resume Suggestions</h4>
                <video
                    src={ResumeSuggestionsVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
                >
                    Error: Your browser does not support the video tag.
                </video>

                <h4>AI Chat</h4>
                <video
                    src={AI_ChatVideo}
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
                <h2 className="fancy-color-text-purple-blue">Portfolio Builder</h2>
                <p>
                    Users can create a personal portfolio to dynamically display projects they have worked on. These portfolios can be customized and there are a variety of sections to choose from to add content to each project.
                    A unique URL is provided for the portfolio enabling users to include it on any job application, so that companies can easily view their portfolio.
                </p>

                {/* <ImageGallery _imageUrls={portfolioImageUrls} />                 */}

                <div className="project-page-add-content">
                    <GalleryPreview
                        images={portfolioImageUrls}
                        onClick={() => setImageGalleryOpen(true)}
                    />
                </div>

                <Dialog open={imageGalleryOpen} onClose={() => setImageGalleryOpen(false)} maxWidth="lg" fullWidth sx={{maxHeight: '100%'}}>
                    <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageGallery _imageUrls={portfolioImageUrls} />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="project-page-content-section project-page-section-sizing">
                <h2 className="fancy-color-text-purple-blue">User Networking</h2>
                <p>
                    The networking page shows all users of the site, some details about them, and each user&apos;s resume and portfolio if provided. These can be searched for with the search bar.
                    Users can message and interact with each other via our messaging feature.
                </p>
                <video
                    src={NetworkingVideo}
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
                <h2 className="fancy-color-text-purple-blue">Miscellaneous</h2>
                <h4>Automatic Account data population from Resume Upload</h4>
                <video
                    src={AccountCreationVideo}
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

export default ResumeRocketPage;