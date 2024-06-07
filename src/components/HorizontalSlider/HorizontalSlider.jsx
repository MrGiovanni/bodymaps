import React, {useEffect, useRef, useState} from 'react'
import './HorizontalSlider.css'

function HorizontalSlider(props) {
    const slider = useRef();
    const [numSlides, setNumSlides] = useState(0);
    const [slideNum, setSlideNum] = useState(1);

    const slideBackward = () => {
        if (slideNum > 1) {
            setSlideNum(prevSlideNum => prevSlideNum - 1);
        }
    };
    
    const slideForward = () => {
        if (slideNum < numSlides) {
            setSlideNum(prevSlideNum => prevSlideNum + 1);
        }
    };

    const onSlideClick = (index) => (e) => {
        setSlideNum(index + 1);
    }

    useEffect(() => {
        const margin = 10;
        const slideWidth = document.getElementsByClassName("slide")[0].getBoundingClientRect()['width'];
        const slideJumpSize = slideWidth + 2*margin;
        const targetScrollPosition = ((slideNum - 0.5) * slideJumpSize) + 4000 - (slider.current.getBoundingClientRect()['width'])/2; // Calculate the target scroll position
        slider.current.scrollLeft = targetScrollPosition; // Scroll to the target position
    });

    useEffect(() => {
    document.querySelectorAll(`.${props.sliderNum} .slide`).forEach((slide, index) => {
        if (index === slideNum - 1) {
            slide.classList.remove('disabledSlide');
            slide.play();
        } else {
            slide.classList.add('disabledSlide');
            slide.pause();
        }
    });
    }, [slideNum]);
    
    useEffect(() => {
        setNumSlides(props.slidesUrls.length)
    }, [props.slidesUrls]);

    const handleResize = () => {
        const margin = 10;
        const slideWidth = document.getElementsByClassName("slide")[0].getBoundingClientRect()['width'];
        const slideJumpSize = slideWidth + 2*margin;
        const targetScrollPosition = ((slideNum - 0.5) * slideJumpSize) + 4000 - (slider.current.getBoundingClientRect()['width'])/2; // Calculate the target scroll position
        slider.current.scrollLeft = targetScrollPosition; // Scroll to the target position
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <div className={`horizontal-slider ${props.sliderNum}`}>
            <div className="btns">
                <button className={`slider-btn ${slideNum > 1? '' : 'disabled-btn'}`} onClick={slideBackward}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.00415039" y="0.300781" width="45.0042" height="45.0042" rx="22.5021" fill="#EEEEEE"/>
                        <path d="M25.5154 31.7952L16.5249 22.8047L25.5154 13.8142L27.4811 15.7952L20.4716 22.8047L27.4811 29.8142L25.5154 31.7952Z" fill="#666666"/>
                    </svg>
                </button>
                <p>{`${slideNum} of ${numSlides}`}</p>
                <button className={`slider-btn ${slideNum < numSlides? '' : 'disabled-btn'}`} onClick={slideForward}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.300781" width="45.0042" height="45.0042" rx="22.5021" fill="#EEEEEE"/>
                        <path d="M19.485 31.7952L17.5193 29.8142L24.5288 22.8047L17.5193 15.7952L19.485 13.8142L28.4755 22.8047L19.485 31.7952Z" fill="#666666"/>
                    </svg>
                </button>
            </div>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <p className="emptySlide">  </p>
                    </li>
                    {props.slidesUrls.map((slide, index) => (
                        <li key={index}>
                            {/* Video element for each URL */}
                            <video id={`${props.sliderNum}_slide${index}`} className="slide" autoPlay={true} muted={true} loop onClick={onSlideClick(index)}>
                                <source src={slide} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </li>
                    ))}
                    <li>
                        <p className="emptySlide">  </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HorizontalSlider