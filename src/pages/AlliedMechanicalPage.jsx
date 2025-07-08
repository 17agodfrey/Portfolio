import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import '../styles/ProjectPage.css'; // Optional: Add styles for the component
import '../styles/AlliedMechanicalPage.css'; // Import styles for Allied Mechanical page
import PayrollSnapshot from '../assets/project-pictures/allied-mechanical/media for portfolio/payroll.png';
import TaxSnapshot from '../assets/project-pictures/allied-mechanical/media for portfolio/tax.png';
import Output from '../assets/project-pictures/allied-mechanical/media for portfolio/output-1.png';
import OutputSummary from '../assets/project-pictures/allied-mechanical/media for portfolio/output-summary.png';
import DemoVideo from '../assets/project-pictures/allied-mechanical/media for portfolio/jobcosting-SR-edited-no-excel.mp4'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

const githubLink = ""

const AlliedMechanicalPage = () => {

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
                    <h1 className="fancy-color-text-orange-red">Automated Job Costing Tool</h1>
                    <h3>Desktop Application, Contract Work for Allied Mechanical</h3>
                    <h3>May 2025 - May 2025</h3>

                    <div className="hz-left-top project-page-links" style={{gap: '1rem'}}>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
                            <div className='hz-left project-page-link-container' style={{gap: '.35rem'}}>
                                <GitHubIcon className="project-card-link-icon" alt={`go to AM Job Costing Tool Github`} />
                                <p>Github Repository</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p>
                    This desktop application was created for Allied Mechanical, an HVAC company. The process of creating job costing reports from payroll
                    and tax documents was previously done manually, which was time-consuming (taking 3-4 hours per report) and prone to human error.
                    This application automates the process, allowing users to generate job costing reports in a matter of seconds. It takes the two reports, 
                    payroll and tax, and combines them into a single job costing excel report. 
                </p>
            </div>

            <div>
                <p>(Note: all data in the following media is mocked/not real)</p>
            </div>

            <div className="project-page-content-section project-page-section-sizing" style={{ position: "relative", minHeight: "600px" }}>
                <div className='hz-center' style={{ gap: '2rem', position: "relative", zIndex: 1 }}>
                    <div className="v-center-center" style={{ gap: '1rem' }}>
                        <h2 className="fancy-color-text-purple-blue">Payroll Sheet</h2>
                        <img src={PayrollSnapshot} className="AM-picture" alt="Payroll Snapshot" id="payroll-img" />
                    </div>
                    <div className='v-center-center' style={{ gap: '1rem' }}>
                        <h2 className="fancy-color-text-purple-blue">Tax Sheet</h2>
                        <img src={TaxSnapshot} className="AM-picture" alt="Tax Snapshot" id="tax-img" />
                    </div>
                </div>
                {/* SVG Arrow from Payroll to Video (left image) */}
                <svg
                    style={{
                        position: "absolute",
                        left: "10%",
                        top: "39%",
                        width: "16%",
                        height: "35%",
                        zIndex: 2,
                        pointerEvents: "none"
                    }}
                    viewBox="0 0 100 400"
                >
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--purple-color)" />
                        </marker>
                    </defs>
                    {/* Start at top center, go right, then down */}
                    <polyline
                        points="50,0 50,80 90,80 90,118"
                        fill="none"
                        stroke="var(--purple-color)"
                        strokeWidth="6"
                        markerEnd="url(#arrowhead)"
                    />
                </svg>
                {/* SVG Arrow from Tax to Video (right image) */}
                <svg
                    style={{
                        position: "absolute",
                        right: "10%",
                        top: "39%",
                        width: "16%",
                        height: "35%",
                        zIndex: 2,
                        pointerEvents: "none"
                    }}
                    viewBox="0 0 100 400"
                >
                    <defs>
                        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--purple-color)" />
                        </marker>
                    </defs>
                    {/* Start at top center, go left, then down */}
                    <polyline
                        points="50,0 50,80 10,80 10,118"
                        fill="none"
                        stroke="var(--purple-color)"
                        strokeWidth="6"
                        markerEnd="url(#arrowhead2)"
                    />
                </svg>
                <div style={{ marginTop: "6rem", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
                    <h2 className="fancy-color-text-purple-blue">Demo Video</h2>
                    <video
                        src={DemoVideo}
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

            <div className="project-page-content-section project-page-section-sizing" style={{ position: "relative", minHeight: "600px", marginTop: "6rem" }}>
                <svg
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "-23%",
                        width: "16%",
                        height: "56%",
                        zIndex: 2,
                        pointerEvents: "none",
                        transform: "translateX(-50%)"
                    }}
                    viewBox="0 0 100 400"
                >
                    <defs>
                        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="var(--blue-color)" />
                        </marker>
                    </defs>
                    <polyline
                        points="50,0 50,110,118"
                        fill="none"
                        stroke="var(--blue-color)"
                        strokeWidth="6"
                        markerEnd="url(#arrowhead-blue)"
                    />
                </svg>
                <div className='v-center-center' style={{ gap: '1rem', position: "relative", zIndex: 1 }}>
                    <h2 className="fancy-color-text-purple-blue">Output Job Costing Report</h2>
                    <div className="hz-center" style={{ gap: '2rem' }}>
                        <img 
                            src={Output} 
                            style={{ width: "150%", height: "auto" }}
                            alt="Output picture" 
                            id="output-img" 
                        />
                        <img
                            src={OutputSummary}
                            style={{ width: "40%", height: "auto" }}
                            alt="Output Summary"
                            id="output-summary-img"
                        />                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AlliedMechanicalPage;