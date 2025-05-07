import "../styles/LandingPage.css";
import ProjectCard from "../components/ProjectCard.jsx"; 
import RR_Logo from "../assets/RR_logo1.png";
import DateFinderLogo from "../assets/DateFinder_logo.png";
import ReactLogo from "../assets/react.svg";


const LandingPage = () => {
    return (
        <div id="landing-page-root">
            <div id="name-window" className="fancy-color-container">
                <header className="header" id="yeet">
                    <h1>Austin Godfrey</h1>
                </header>
                <main className="subheader">
                    <p>Full Stack Web Development + Cool stuff Idk</p>
                </main>
            </div>

            <div id="about-window">
                <h2>About Me</h2>
                <p>
                    I am a passionate full-stack web developer with a knack for creating dynamic and responsive web applications. I love coding and enjoy learning new technologies. My goal is to build user-friendly applications that solve real-world problems.
                </p>
                <p>
                    I have experience in various programming languages and frameworks, including JavaScript, React, Node.js, and more. I am always eager to learn and grow in my field.
                </p>
                <p>
                    In my free time, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with other developers. I believe in the power of community and love sharing knowledge with others.
                </p>
                <p>
                    If you&apos;re interested in collaborating or just want to chat, feel free to reach out!
                </p>
            </div>


            <div id="projects-window">
                <h2>Projects</h2>
                <div className="projects-container">
                    <ProjectCard
                        title="Resume Rocket"
                        urlTitle="resume-rocket"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={RR_Logo}
                        siteLink="https://resume-rocket.online"
                        githubLink="https://github.com/orgs/ResumeRocket-PM/repositories"
                        techUsed={["JavaScript", "React", "Node.js"]}
                    />
                    <ProjectCard
                        title="DateFinder"
                        urlTitle="datefinder"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={DateFinderLogo}
                        siteLink="https://datefinder.lol"
                        githubLink="https://github.com/17agodfrey/DateFinder"
                        techUsed={["JavaScript", "React", "Node.js"]}
                    />
                    <ProjectCard
                        title="Project 3"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={ReactLogo}
                        link="https://example.com"
                        techUsed={["JavaScript", "React", "Node.js"]}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;