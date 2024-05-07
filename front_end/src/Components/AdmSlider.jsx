import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import image from "@Assets/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Define custom arrow components outside of the functional component
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} style={{ position: "absolute", top: "50%", left: "15px", transform: "translateY(-50%)", cursor: "pointer", zIndex: 999 }}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "24px", color: "black" }} />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} style={{ position: "absolute", top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer", zIndex: 999 }}>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "24px", color: "black" }} />
        </div>
    );
};

function AdmSlider() {
    const sliderRef = useRef(null); // Ref to the Slider component
    const [slidesToShow, setSlidesToShow] = useState(1); // State to store number of slides to show
    const [imageWidth, setImageWidth] = useState(0); // State to store image width

    const settings = {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        speed: 500,
        arrows: true, // Enable arrows
        prevArrow: <CustomPrevArrow />, // Custom previous arrow component
        nextArrow: <CustomNextArrow />, // Custom next arrow component
    };

    useEffect(() => {
        // Update number of slides to show based on device width
        const updateSlidesToShow = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setSlidesToShow(4); // Show 3 slides on desktop
            } else if (screenWidth >= 768) {
                setSlidesToShow(2); // Show 2 slides on tablet
            } else {
                setSlidesToShow(1); // Show 1 slide on mobile
            }
        };

        updateSlidesToShow();

        // Listen for window resize events
        window.addEventListener("resize", updateSlidesToShow);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    useEffect(() => {
        // Get the width of the image
        const img = new Image();
        img.onload = () => {
            setImageWidth(img.width);
        };
        img.src = image;
    }, []);

    const sliderContainerStyle = {
        position: "relative", // Set position to relative for absolute positioning of arrows
        margin: "0 auto", // Center the slider horizontally
        width: `${imageWidth * slidesToShow}px`, // Set the width of the slider container dynamically
    };

    const handleClick = () => {
        // Move to the next slide when image is clicked
        sliderRef.current.slickNext();
    };

    return (
        <div className="slider-container" style={sliderContainerStyle}>
            <Slider {...settings} ref={sliderRef}>
                <div onClick={handleClick}>
                    <img src={image} alt="image" style={{ width: "100%" }} />
                </div>
                <div onClick={handleClick}>
                    <img src={image} alt="image" style={{ width: "100%" }} />
                </div>
                <div onClick={handleClick}>
                    <img src={image} alt="image" style={{ width: "100%" }} />
                </div>
            </Slider>
        </div>
    );
}

export default AdmSlider;
