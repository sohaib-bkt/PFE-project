import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
function AdmSlider({ images = "[]" , image }) {
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [imageWidth, setImageWidth] = useState(0);

    const imagesArray = JSON.parse(images);

    const settings = {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    useEffect(() => {
        const updateSlidesToShow = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setSlidesToShow(4);
            } else if (screenWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        updateSlidesToShow();

        window.addEventListener("resize", updateSlidesToShow);

        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageWidth(img.width);
        };
        // Assuming the image variable is correctly passed in from props
        img.src = `http://localhost:8000/api/images/products/${image}`;
       
    }, [image]);

    const sliderContainerStyle = {
        position: "relative",
        margin: "0 auto",
        width: `${imageWidth * slidesToShow}px`,
    };

    const handleClick = () => {
        sliderRef.current.slickNext();
    };
    
    return (
        <div className="slider-container" style={sliderContainerStyle}>
            <Slider {...settings} ref={sliderRef}>
                {imagesArray.map((imageItem, index) => (
                    <div key={index} onClick={handleClick}>
                        <img src={`http://localhost:8000/api/images/products/${imageItem}`} alt="image" style={{ width: "100%" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AdmSlider;



