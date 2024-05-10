import { useRef } from "react";
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

function AdmSlider({ images = "[]" }) {
    const sliderRef = useRef(null);
    const imagesArray = JSON.parse(images);

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
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
