import "../styles/LandingPage.css";
import "../styles/text.css";
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import ProjectCard from "../components/ProjectCard.jsx"; 

import RR_Logo from "../assets/RR_logo1.png";
import WhatDoLogo from "../assets/project-pictures/whatdo/whatdo-logo.png";
import ReactLogo from "../assets/react.svg";
import AlliedMechanicalLogo from "../assets/project-pictures/allied-mechanical/logo3.png"; // Example logo, replace with actual logo if needed





const LandingPage = () => {

    const rootRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
    if (rootRef.current) {
        window.scrollTo(0, 0);
    }
    }, [location]);


    return (
        <div id="landing-page-root" ref={rootRef}>
            {/* <div id="name-window" className="fancy-color-container">
                <header className="header" id="fancy-color-text">
                    <h1>Austin Godfrey</h1>
                </header>
                <main className="subheader">
                    <p>Full Stack Web Development + Cool stuff Idk</p>
                </main>
            </div> */}

            <div id="name-window" className="card">
                <header className="header">
                    <h1 className="matrix-text" data-text="Austin Godfrey">Austin Godfrey</h1>
                </header>
                <main className="subheader">
                    {/* <p>Full Stack Web Development + Cool stuff Idk</p> */}
                <p aria-label="Hi! I'm a developer">
                    Hi! I&apos;m a&nbsp;<span className="typewriter thick"></span>
                </p>
                </main>
            </div>


            <div id="about-window">
                <h2 className="fancy-color-text-orange-red">About Me</h2>
                <p>
                    Hi, I&apos;m Austin, a passionate Software Developer with over 3 years experience building responsive, live applications using cutting edge technologies. I hold a degree in Software Development and am always learning new things on sites like Udemy, and by working my own stuff. Let&apos;s build something cool!
                </p>
            </div>


            <div id="projects-window">
                <h2 className="fancy-color-text-orange-red">Projects</h2>
                <div className="projects-container">
                    <ProjectCard
                        title="Resume Rocket"
                        urlTitle="resume-rocket"
                        description="Web application for helping users land jobs. Main services include resume tailoring, resume version history, portfolio creation, and user networking."
                        image={RR_Logo}
                        siteLink="https://resume-rocket.online"
                        githubLink="https://github.com/orgs/ResumeRocket-PM/repositories"
                        techUsed={["JavaScript","React", "C#", ".NET Core", "MUI", "Microsoft SQL Server", "Docker", "OpenAI API", "AWS", "Azure" ]}
                    />
                    <ProjectCard
                        title="WhatDo"
                        urlTitle="whatdo"
                        description="Web application to find activities to do with friends, family, or a date. Users can filter by location, activity type, and more. Features an interactive Google Map. "
                        image={WhatDoLogo}
                        siteLink="https://whatdo.online"
                        githubLink="https://github.com/17agodfrey/WhatDo"
                        techUsed={["JavaScript","React", "C#", ".NET Core", "PostgreSQL", "Entity Framework", "Supabase", "Google Cloud Provider", "AWS" ]}
                    />
                    <ProjectCard
                        title="Automated Job Costing Tool"
                        urlTitle="allied-mechanical-job-costing-tool"
                        description="Contract work for Allied Mechanical. A desktop application that analyzes verbose payroll and tax excel documents to generate a new easy-to-read job costing report."
                        image={AlliedMechanicalLogo}
                        link="https://example.com"
                        techUsed={["Python", "Pandas", "Tkinter", "Excel Automation", "Data Analysis"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;