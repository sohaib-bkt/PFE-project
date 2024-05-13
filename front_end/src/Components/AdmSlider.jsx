import { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const CustomPrevArrow = ({ onClick, showArrow }) => {
    return showArrow ? (
        <div onClick={onClick} style={{ position: "absolute", top: "50%", left: "15px", transform: "translateY(-50%)", cursor: "pointer", zIndex: 999 }}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "24px", color: "black" }} />
        </div>
    ) : null;
};

const CustomNextArrow = ({ onClick, showArrow }) => {
    return showArrow ? (
        <div onClick={onClick} style={{ position: "absolute", top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer", zIndex: 999 }}>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "24px", color: "black" }} />
        </div>
    ) : null;
};

function AdmSlider({ images = "[]", Pricipalimage }) {
    const sliderRef = useRef(null);
    let imagesArray = JSON.parse(images);
    // Add the principal image to the beginning of the imagesArray
    if (Pricipalimage) {
        imagesArray = [Pricipalimage, ...imagesArray];
    }

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: imagesArray.length > 1, // Show arrows only when there's more than 1 image
        prevArrow: <CustomPrevArrow showArrow={imagesArray.length > 1} />,
        nextArrow: <CustomNextArrow showArrow={imagesArray.length > 1} />,
        infinite: imagesArray.length > 1,
    };

    const handleClick = () => {
        sliderRef.current.slickNext();
    };
    
    return (
        <div className="slider-container" style={{ width: "400px", height: "370px" }}>
            <Slider {...settings} ref={sliderRef}>
                {imagesArray.map((imageItem, index) => (
                    <div key={index} onClick={handleClick}>
                        <img src={`http://localhost:8000/api/images/products/${imageItem}`} alt="image" style={{ width: "400px", height: "370px", objectFit: "cover" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AdmSlider;
