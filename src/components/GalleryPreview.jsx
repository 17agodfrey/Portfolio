import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GalleryPreview.css'; // Add styles for the component

const GalleryPreview = ({ images, onClick }) => {
    return (
        <div className="gallery-preview-container" onClick={onClick}>
            {images.slice(0, 5).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery preview ${index + 1}`}
                    className={`gallery-preview-image gallery-preview-image-${index + 1}`}
                />
            ))}
            <div className="gallery-preview-overlay">
                <p>Click to view gallery</p>
            </div>
        </div>
    );
};

GalleryPreview.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs
    onClick: PropTypes.func.isRequired, // Function to handle click events
};

export default GalleryPreview;