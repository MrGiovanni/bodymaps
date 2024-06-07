import React, { useEffect, useRef, useState } from 'react';
import './videoGallery.css';

const VideoCarousel = ({ videos, counterId, prevBtnId, nextBtnId }) => {
    const carouselRef = useRef(null);
    const counterRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const calculateOffsetPercentage = (index, videos, gallery) => {
        let offsetPixels = 0;
        const margin = 20; // Assuming a 20px margin between videos
        for (let i = 0; i < index; i++) {
            offsetPixels += videos[i].offsetWidth + margin;
        }
        const galleryWidth = gallery.offsetWidth;
        return -((offsetPixels - galleryWidth / 2 + videos[index].offsetWidth / 2) / galleryWidth) * 100;
    };

    const centerVideo = (videos, index, carousel) => {
        const offsetPercentage = calculateOffsetPercentage(index, videos, carousel);
        carousel.style.transform = `translateX(${offsetPercentage}%)`;
    };

    const updateCounter = (index, total, counterElement) => {
        counterElement.textContent = `${index + 1} of ${total}`;
    };

    const highlightActiveVideo = (videos, index) => {
        videos.forEach((video, i) => {
            video.classList.toggle('active', i === index);
            video.style.opacity = i === index ? '1' : '0.5';
        });
    };

    const updateCarousel = () => {
        const carousel = carouselRef.current;
        const counterElement = counterRef.current;
        const videos = carousel.querySelectorAll('.video');
        centerVideo(videos, currentVideoIndex, carousel);
        updateCounter(currentVideoIndex, videos.length, counterElement);
        highlightActiveVideo(videos, currentVideoIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            updateCarousel();
        };

        window.addEventListener('resize', handleResize);
        updateCarousel(); // Initial call to set the carousel to the correct state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentVideoIndex]);

    return (
        <div className="video-carousel-container">
            <button
                className="video-nav"
                id={prevBtnId}
                onClick={() => {
                    if (currentVideoIndex > 0) {
                        setCurrentVideoIndex(currentVideoIndex - 1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 18l-6-6 6-6" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="video-counter-wrapper">
                <div id={counterId} ref={counterRef} className="counter-text">1 of {videos.length}</div>
                <div id="video-carousel" ref={carouselRef} className="video-carousel">
                    {videos.map((videoSrc, index) => (
                        <div className="video-wrapper" key={index}>
                            <video className="video" controls autoPlay muted loop>
                                <source src={videoSrc} type="video/mp4" />
                            </video>
                            <p className="video-description">Description for Video {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="video-nav"
                id={nextBtnId}
                onClick={() => {
                    if (currentVideoIndex < videos.length - 1) {
                        setCurrentVideoIndex(currentVideoIndex + 1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6l6 6-6 6" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default VideoCarousel;
