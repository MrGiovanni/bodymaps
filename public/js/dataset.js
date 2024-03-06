let activeIndex = 0; // Index of the currently active video
const videoContainers = document.querySelectorAll('.video-gallery .video-container');
const totalVideos = videoContainers.length;

function makeVideoActive(index) {
    // First, reset all videos
    videoContainers.forEach((container, idx) => {
        const video = container.querySelector('video');
        video.pause();
        video.currentTime = 0;
        container.classList.remove('active');
    });
    
    // Set the active video
    const newActiveIndex = (index + totalVideos) % totalVideos; // Adjust if index is out of bounds
    const newActiveContainer = videoContainers[newActiveIndex];
    newActiveContainer.classList.add('active');
    const newActiveVideo = newActiveContainer.querySelector('video');
    newActiveVideo.play();

    // Update the active index
    activeIndex = newActiveIndex;

    // Adjust the visibility of the videos based on the new active index
    videoContainers.forEach((container, idx) => {
        if (idx < activeIndex - 1 || idx > activeIndex + 1) {
            container.style.display = 'none'; // Hide videos that are not in the surrounding three
        } else {
            container.style.display = 'block'; // Show the surrounding three videos
        }
    });
}

// Call this function to initialize the gallery
makeVideoActive(0);

// Function to cycle to the next video
function cycleVideos() {
    makeVideoActive(activeIndex + 1);
}
