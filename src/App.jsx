import React from 'react';
import './App.css';
import VideoCarousel from './components/videoGallery.jsx';
import CTScanMesh from './components/CTScanMesh/CTScanMesh.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => {
    const videos1 = [
        'https://raw.githubusercontent.com/MrGiovanni/bodymaps/gh-pages/videos/AbdomenAtlas1.0/BDMAP_00000020.mp4',
        'https://raw.githubusercontent.com/MrGiovanni/bodymaps/gh-pages/videos/AbdomenAtlas1.0/BDMAP_00000031.mp4',
        'https://raw.githubusercontent.com/MrGiovanni/bodymaps/gh-pages/videos/AbdomenAtlas1.0/BDMAP_00000205.mp4',
    ];

    const videos2 = [
        'https://raw.githubusercontent.com/MrGiovanni/bodymaps/gh-pages/videos/AbdomenAtlas1.1/BDMAP_00000006.mp4',
        'https://raw.githubusercontent.com/MrGiovanni/bodymaps/gh-pages/videos/AbdomenAtlas1.1/BDMAP_00000031.mp4'
    ];

    return (
        <div className="main-container">
            {/* Abdomen Atlas Section */}
            <section id="abdomen-atlas">
                <div className="title-container">
                    <h1><span className="red-letter">A</span>bdomen<span className="red-letter">A</span>tlas 1.0</h1>
                    <p className="status-line" style={{ display: 'inline' }}>
                        Status: Released <a href="https://engineering.jhu.edu/news/ai-and-radiologists-unite-to-map-the-abdomen/" className="status-link">[JHU WSE News]</a>
                    </p>
                    <div className="buttons-container">
                        <a href="https://www.cs.jhu.edu/~alanlab/Pubs23/qu2023abdomenatlas.pdf" className="button" target="_blank">Paper</a>
                        <a href="https://github.com/MrGiovanni/AbdomenAtlas" className="button" target="_blank">GitHub</a>
                        <a href="https://huggingface.co/datasets/AbdomenAtlas/AbdomenAtlas1.0Mini" className="button" target="_blank">Dataset</a>
                    </div>
                </div>
                <div className="stats-container">
                    <div className="stat-item">
                        <h2>1.5 million</h2>
                        <p>2D CT Images</p>
                    </div>
                    <div className="stat-item">
                        <h2>5,195</h2>
                        <p>3D CT Volumes</p>
                    </div>
                    <div className="stat-item">
                        <h2>9</h2>
                        <p>Annotated Structures</p>
                    </div>
                    <div className="stat-item">
                        <h2>26</h2>
                        <p>Hospitals</p>
                    </div>
                </div>
            </section>

            <VideoCarousel videos={videos1} counterId="counter" prevBtnId="prev-video" nextBtnId="next-video" />

            <section id="abdomen-atlas-1-1" className="abdomen-atlas-section">
                <div className="title-container">
                    <h1><span className="red-letter">A</span>bdomen<span className="red-letter">A</span>tlas 1.1</h1>
                    <p>Status: In Progress</p>
                    <a href="https://www.cs.jhu.edu/~alanlab/Pubs23/li2023suprem.pdf" className="button" target="_blank">Paper</a>
                    <a href="https://github.com/MrGiovanni/SuPreM" className="button" target="_blank">GitHub</a>
                </div>
                <div className="stats-container">
                    <div className="stat-item">
                        <h2>3.0 million</h2>
                        <p>2D CT Images</p>
                    </div>
                    <div className="stat-item">
                        <h2>9,262</h2>
                        <p>3D CT Volumes</p>
                    </div>
                    <div className="stat-item">
                        <h2>25</h2>
                        <p>Annotated Structures</p>
                    </div>
                    <div className="stat-item">
                        <h2>88</h2>
                        <p>Hospitals</p>
                    </div>
                </div>

                <VideoCarousel videos={videos2} counterId="counter-new" prevBtnId="prev-video-new" nextBtnId="next-video-new" />
            </section>

            <section id="bodymaps-section" className="info-section">
                <div className="header">
                    <img src="https://chuntungzhuangleo.github.io/BodyMapWebsite/videos/logo_white_bg.png" alt="BodyMaps Illustration" className="header-image"/>
                    <h1 className="header-title">BodyMaps</h1>
                </div>
                <p><b>Internal use only; open for collaboration</b></p>
                <div className="stats-container">
                    <div className="stat-item">
                        <h2>8.5 million</h2>
                        <p>2D CT Images</p>
                    </div>
                    <div className="stat-item">
                        <h2>22,682</h2>
                        <p>3D CT Volumes</p>
                    </div>
                    <div className="stat-item">
                        <h2>142</h2>
                        <p>Annotated Structures</p>
                    </div>
                    <div className="stat-item">
                        <h2>94</h2>
                        <p>Hospitals</p>
                    </div>
                </div>
                <p className="description">
                    <b>BodyMaps</b> provide a three-dimensional digital atlas of the human body, conceptually similar to <a href="https://www.google.com/maps/@39.3153745,-76.6065997,14z?entry=ttu" className="status-link2">Google Maps</a> but focusing on human anatomy. BodyMaps offer three unique features: <i>First</i>, semantic segmentation of anatomical structures, such as the cardiovascular system, skeleton, muscles, and gastrointestinal tract. <i>Second</i>, tumor screening across various structures, including lungs, abdomen, brain, bones, heart, and blood vessels. <i>Third</i>, supporting multiple clinical tasks, such as image registration, disease quantification, tumor stage estimation, report generation, etc. The BodyMaps Project has now contributed a total of <b>22,682</b> computed tomography (CT) volumes with detailed, per-voxel annotations of <b>142</b> anatomical structures and associated <b>tumors</b>. This dataset has already attracted <b>50+</b> leading research teams worldwide, driving innovation from classical methods (U-Net and its variants) to cutting-edge Foundation Models.
                </p>
                <p className="description">
                    In 2009, before the advent of <a href="https://www.image-net.org/" className="status-link2">ImageNet</a>, it was challenging to develop artificial intelligence (AI) algorithms that are robust to different domains using a small or even medium size of labeled data. The same situation, we believe, that presents in medical image analysis today, which is in dire need of its own ImageNet moment, where a large amount of data is available, where high-quality annotations are performed, where multiple domains (hospitals) are covered, where the dataset is attached to a widely recognized challenge. The BodyMaps Project presents unprecedented data and annotation scales with over <b>3.2 million </b> organ/tumor masks and <b>8.5 million</b> annotated images that are taken from <b>94</b> hospitals across <b>19</b> countries and manually inspected by expert radiologists.
                </p>
                <CTScanMesh id="canvas" />
            </section>

            <Footer />
        </div>
    );
};

export default App;
