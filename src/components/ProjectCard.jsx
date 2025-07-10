import PropTypes from 'prop-types';
import '../styles/ProjectCard.css'; // Optional: Add styles for the component
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';


const ProjectCard = ({ title, urlTitle, description, image, siteLink, githubLink, techUsed }) => {
    const navigate = useNavigate(); 

    const onClick = () => {
        navigate(`/${urlTitle}`); 
    };

    return (
        <div className="card project-card" onClick={onClick}>
            <div className="project-card-link-container">
                {siteLink && (
                    <a
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                    onClick={e => e.stopPropagation()}
                    >
                    <LanguageIcon className="project-card-link-icon" alt={`go to ${title} site`} />
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        onClick={e => e.stopPropagation()}
                    >
                        <GitHubIcon className="project-card-link-icon" alt={`go to ${title} Github`} />
                    </a>
                )}
            </div>
            {image && <img src={image} alt={title} className="project-card-image" />}
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
            </div>
            <div className="project-card-tech-used-container">
                {techUsed?.map((tech, index) => (
                    <Chip
                        key={index} // Use index as a key (acceptable for static lists)
                        label={tech} // Set the label to the current tech string
                        className="tech-used-chip"
                        sx={{ backgroundColor: "#152a3a", color: "var(--blue-color)", fontWeight: 500 }}
                    />
                ))}            
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    urlTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    siteLink: PropTypes.string,
    githubLink: PropTypes.string,
    techUsed: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default ProjectCard;