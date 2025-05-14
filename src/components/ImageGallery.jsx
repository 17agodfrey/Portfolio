import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useEffect, useState, useContext } from 'react';
import "../styles/ImageGallery.css";



const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
};

const ImageGallery = ({ _imageUrls }) => {

    const sliderRef = useRef(null);

    const [imageUrls, setImageUrls] = useState(_imageUrls);

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "80px",
        // adaptiveHeight: true,   
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // afterChange: handleAfterChange,
    };


    console.log('imageUrls', imageUrls);


    return (
        <>
            <style>
                {`
                    .slick-prev {
                        left: -22px; /* Adjust the left button's position */
                        top: 50%; /* Center vertically */
                        transform: translate(0, -50%); /* Adjust for vertical centering */
                        z-index: 1; /* Ensure it appears above other elements */
                    }
                    .slick-next {
                        right: -10px; /* Adjust the right button's position */
                        top: 50%; /* Center vertically */
                        transform: translate(0, -50%); /* Adjust for vertical centering */
                    }


                    .slick-prev:before,
                    .slick-next:before {
                        color: red;
                        font-size: 30px;
                    }

                    .slick-dots {
                        color: red;
                    }
                `}
            </style>
            <div 
                className="slider-container"
                style={{
                    width: '100%', 
                    minWidth: '100%', 
                }}
            >
                    <Slider ref={sliderRef} {...settings} className='img-slider'>
                        {imageUrls && imageUrls.map((image, index) => (
                            <div key={index} className='carousel-item'>
                                <img 
                                    src={image} 
                                    alt={`carousel-item-${index}`} 
                                />
                            </div>
                        ))}
                    </Slider>
            </div>        
        </>
    );
};

export default ImageGallery;