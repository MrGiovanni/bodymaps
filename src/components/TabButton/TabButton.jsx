import React, { useState, useEffect } from 'react';
import './TabButton.css'; // Assume your CSS is in this file

const TabButton = ({ label, targetId }) => {
    const [isActive, setIsActive] = useState(false);


    const handleClick = () => {
        const section = document.getElementById(targetId);
        const tabButtonsHeight = document.getElementById('tab-buttons').getBoundingClientRect().height;
        const scrollOffset = 2*tabButtonsHeight; // Adjust this value as needed
        const sectionTop = section.offsetTop;
        window.scrollTo({ top: sectionTop - scrollOffset, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const tabButtonsHeight = document.getElementById('tab-buttons').getBoundingClientRect().height;
        const scrollOffset = 2*tabButtonsHeight; // Adjust this value as needed
        const section = document.getElementById(targetId);
        const fromTop = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const isWithinSection = fromTop > sectionTop - 1.1*scrollOffset && fromTop < sectionTop + sectionHeight - 1.1*scrollOffset;

        setIsActive(isWithinSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add 'sticky-tab' class based on 'isSticky' state
    const buttonClass = `tab-button ${isActive ? 'active' : ''}`;

    return (
        <button className={`${buttonClass} ${label}`} onClick={handleClick}>
        <b>{label}</b>
        </button>
    );
};

export default TabButton;
