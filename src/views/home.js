import React, { useEffect,useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Carousel, { clickToChangePlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import HomeIcon from '@mui/icons-material/Delete';


import './home.css'
import { IconButton, Typography, Stack } from '@mui/material';
import { set } from 'mongoose';

const Home = (props) => {
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)
  
  const [disabled1, setDisabled1] = useState(true)
  const [disabled2, setDisabled2] = useState(false)
  const [value, setValue] = useState(0);
  const [key, setKey] = useState(1)
  const [background1, setBackground1] = useState('transparent')
  const [background2, setBackground2] = useState('transparent')
  const [background3, setBackground3] = useState('transparent')
  const [zindex1, setZindex1] = useState(0)
  const [zindex2, setZindex2] = useState(10)
  const [zindex3, setZindex3] = useState(10)

  const handlePlay1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play()
    }
  }
  const handlePause1 = () => {
    if (videoRef1.current) {
      videoRef1.current.pause()
    }
  }
  const handlePlay2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play()
    }
  }
  const handlePause2 = () => {
    if (videoRef2.current) {
      videoRef2.current.pause()
    }
  }
  const handlePlay3 = () => {
    if (videoRef3.current) {
      videoRef3.current.play()
    }
  }
  const handlePause3 = () => {
    if (videoRef3.current) {
      videoRef3.current.pause()
    }
  }

  
  useEffect(() => {
    setValue(key-1)
    switch (key) {
      case 1:
        handlePlay1()
        handlePause2()
        setDisabled1(true)
        setDisabled2(false)
        setZindex1(0)
        setZindex2(10)
        setZindex3(10)
        setBackground1('transparent')
        setBackground2('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        break
      case 2:
        handlePause1()
        handlePlay2()
        handlePause3()
        setZindex1(10)
        setZindex2(0)
        setZindex3(10)
        setDisabled1(false)
        setDisabled2(false)
        setBackground1('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground2('transparent')
        setBackground3('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        break
      case 3:
        handlePause2()
        handlePlay3()
        setZindex1(10)
        setZindex2(10)
        setZindex3(0)
        setDisabled2(true)
        setDisabled1(false)
        setBackground2('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.216))')
        setBackground3('transparent')
        break
      default:
        setBackground1('transparent')
        break
    }
  }, [key])


  useEffect(() => {
    console.log(key); 
  }, [key]);
  
  const [needSticky, setNeedSticky] = React.useState(false)
  const stickyObj = needSticky ? { position: 'fixed', top: '-600px',background:'rgba(111, 108, 108, 0.58)' } : {background: 'rgba(53, 52, 52, 0.58)'}
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 580) {
        setNeedSticky(true)
      } else {
        setNeedSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
  )
  return (
    <div className="home-container">
      <Helmet>
        <title>ISBI BodyMaps24</title>
        <meta property="og:description" content="3D Atlas of Human Body" />
        <meta property="og:image" content="/icon.png" />
      </Helmet>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <img alt="image" src="/icon.png" className="home-branding" style={{ width: '70px' }} />
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-hamburger">
              <span className="home-text">
                <span>Menu</span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img alt="image" src="/icon.png" className="home-image"/>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <Link to='/dataset' className="home-text03">Dataset</Link>
                <Link to='/model' className="home-text04">Model</Link>
                <Link to='/leaderboard' className="home-text05">Leaderboard</Link>
                <Link to='/team' className="home-text06">Team</Link>
              </nav>
            </div>
          </div>
        </header>
        <video
          src="/BDMAP_00000007.mp4"
          loop
          muted
          // poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <h1 className="home-heading">
            <span className="home-text08">ISBI BodyMaps24</span>
          </h1>
          <br></br>
          <p className="home-caption">
          3D Atlas of Human Body
          </p>
          <span className="home-text10">
            <span>
              All videos on this page were generated directly
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>by Sora without modification.</span>
          </span>
          <button className="home-button button">
            <span className="home-text14">
              <span>Read Technology Report</span>
              <br></br>
            </span>
          </button>
          <div className="home-container2">
            <div className="home-header-container">
              <div className="home-header"></div>
            </div>
          </div>
          <button disabled="true" className="home-button1" style={stickyObj}>
            <a href="#capability" className="home-text17 button">
              Capability
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </a>
            <a href="#safety" className="home-text18 button">
              <span>Safety</span>
              <br></br>
            </a>
            <a href="#research" className="home-text21 button">
              Research
            </a>
          </button>
        </div>
      </section>
      <br/>
      <br/>
      <section className="home-caption-x">
        <h1 id='introduction' className="home-text23">
          Introduction
        </h1>
        <br/>
        <span>
        Variations in organ sizes and shapes can indicate a range of medical conditions, from benign anomalies to life-threatening diseases. Precise organ volume measurement is fundamental for effective patient care, but manual organ contouring is extremely time-consuming and exhibits considerable variability among expert radiologists. Artificial Intelligence (AI) holds the promise of improving volume measurement accuracy and reducing manual contouring efforts. We formulate our challenge as a semantic segmentation task, which automatically identifies and delineates the boundary of various anatomical structures essential for numerous downstream applications such as disease diagnosis and treatment planning. Our primary goal is to promote the development of advanced AI algorithms and to benchmark the state of the art in this field. 
        <br/>
        <br/>
        The BodyMaps challenge particularly focuses on assessing and improving the generalizability and efficiency of AI algorithms in medical segmentation across diverse clinical settings and patient demographics. In light of this, the innovation of our BodyMaps challenge includes the use of (1) large-scale, diverse datasets for training and evaluating AI algorithms, (2) novel evaluation metrics that emphasize the accuracy of hard-to-segment anatomical structures, and (3) penalties for algorithms with extended inference times. Specifically, this challenge involves two unique datasets. First, AbdomenAtlas, the largest annotated dataset [Qu et al., 2023, Li et al., 2023], contains a total of 10,142 three-dimensional computed tomography (CT) volumes. In each CT volume, 25 anatomical structures are annotated by voxel. AbdomenAtlas is a multi-domain dataset of pre, portal, arterial, and delayed phase CT volumes collected from 88 global hospitals in 9 countries, diversified in age, pathological conditions, body parts, and race background. The AbdomenAtlas dataset will be released by stages to the public for AI development, where in each stage we will release 1,000 annotated CT volumes. Second, JHH-1K [Park et al., 2020] is a proprietary collection of 1,150 dual-phase CT volumes from Johns Hopkins Hospital (JHH), where 22 anatomical structures are annotated by voxel. CT volumes and annotations of JHH-1K will not be disclosed to the public and are exclusively reserved for external validation of AI algorithms. The final scoring will not only be limited to the average segmentation performance but also prioritize the performance of hard-to-segment structures and consider the inference speed of the algorithm. We hope our BodyMaps challenge can set the stage for larger-scale clinical trials and offer exceptional opportunities to practitioners in the medical imaging community.
        </span>
      </section>
      <br/>
      <br/>
      <section className="home-caption-x2">
        <h1 className="home-text23" id='timeline'>
          Timeline
        </h1>
        &nbsp;
        <div style={{fontSize:'1.0rem'}}>
          All dates 2024.
        </div>
      </section>
      <br/>
      <section className="home-caption-x2">
      <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      <TimelineItem>
          <TimelineOppositeContent className='left-time'>
          <Typography variant='h5'>Jan 10</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Challenge website running and registration open
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className='left-time'>
          <Typography variant='h5'>Jan 16</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Release of the dataset and starter code
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className='left-time'>
          <Typography variant='h5'>April 15</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Submission deadline
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className='left-time'>
          <Typography variant='h5'>April 20</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          Release of final results (decisions)
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className='left-time'>
            <Typography variant='h5'>May 27 - May 30</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            Challenge days (ISBI main conference)
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </section>
      <section className="home-note">
        <h1 id="capability" className="home-text23">
          Capability
        </h1>
        <h1 className="home-caption1">
          <span>
            We’re teaching AI to understand and simulate the physical world in
            motion, with the goal of training models that help people solve
            problems that require real-world interaction.
          </span>
          <br></br>
          <br></br>
          <span>
            Introducing Sora, our text-to-video model. Sora can generate videos
            up to a minute long while maintaining visual quality and adherence
            to the user’s prompt.
          </span>
        </h1>
      </section>
      <section className="home-slides">
        <div className="home-slider slider blaze-slider"></div>
        <h1>Heading</h1>
        <h1 id="safety" className="home-text29">
          Safety
        </h1>
        <div>
        </div>
        <h2 className="home-caption2">
          <span>
            We’ll be taking several important safety steps ahead of making Sora
            available in OpenAI’s products. We are working with red
            teamers — domain experts in areas like misinformation, hateful
            content, and bias — who will be adversarially testing the model.
          </span>
          <br></br>
        </h2>
      </section>
      <section className="home-objectives"></section>
      <section className="home-data">
        <div id="research" className="home-header-container1">
          <div className="home-header1">
            <div className="home-row">
              <h2 className="home-heading1">
                <span>Research</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-caption3">some research</p>
          <AwesomeSlider
            play={true}
            animation="openAnimation"
            className='home-slider1'
          >
            <div>
              <video src="/italian-pup.mp4" loop muted preload="auto" controls autoPlay playsInline className="home-video1"></video>
            </div>
            <div>
              <video src="/otter-on-surfboard.mp4" loop muted preload="auto" controls autoPlay playsInline className="home-video1"></video>
            </div>
            <div>
              <video src="/suv-in-the-dust.mp4" loop muted preload="auto" controls autoPlay playsInline className="home-video1"></video>
            </div>
          </AwesomeSlider>
        </div>


        <br/>
        <br/>

        <div style={{alignContent: 'center', textAlign: 'center', color:'white',fontSize: '20px', fontWeight: '100',marginBottom: '-60px' }}>
        <IconButton aria-label="left" size="large" onClick={e=>{key==2?(setValue(key-2),setKey(key-1)):(setValue(key-2),setKey(key-1))}} disabled={disabled1}>
          <img alt="image" src={disabled1==true?"/left-arrow-disabled.svg":"/left-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
          {key}/3
        <IconButton aria-label="right" size="large" onClick={e=>{key==2?(setValue(key),setKey(key+1)):(setValue(key),setKey(key+1))}} disabled={disabled2}>
          <img alt="image" src={disabled2==true?"/right-arrow-disabled.svg":"/right-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
        </div>

        <Carousel
          value={value}
          onChange={()=>{setValue(key-1),console.log("key:",key),console.log("value:",value)}}
          className='home-carousel'
          offset={20}
          plugins={[
            'clickToChange',
            'centered',
            {
              resolve: slidesToShowPlugin,
              options: {
              numberOfSlides: 2
              }
            },
           ]}
        >
        <div onClick={e=>{setKey(1)}}>
          <div className='home-video_back' style={{background: background1, zIndex:zindex1  }}/> 
          <video ref={videoRef1} id="video1" src="/italian-pup.mp4" loop muted preload="auto" controls autoPlay playsInline className="home-video1x" />
          <span className="home-text23x">Italian Pup</span>
        </div>
        <div onClick={e=>{setKey(2)}}>
          <div className='home-video_back' style={{background: background2, zIndex:zindex2 }}/>
          <video ref={videoRef2} id="video2" src="/otter-on-surfboard.mp4" loop muted preload="auto" controls playsInline className="home-video1x"/>
          <span className="home-text23x">Otter on Surfboard</span>
        </div>
        <div onClick={e=>{setKey(3)}}>
          <div className='home-video_back' style={{background: background3, zIndex:zindex3 }}/>
          <video ref={videoRef3} id="video3" src="/suv-in-the-dust.mp4" loop muted preload="auto" controls playsInline className="home-video1x"/>
          <span className="home-text23x">SUV in the Dust</span>
        </div>
        </Carousel>
        
        <div className="home-content">
          <div className="home-image1"></div>
          <div className="home-accordion">
            <div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content1">
          <div className="home-main">
            <div className="home-branding1">
              <img alt="image" src="/icon.png" className="home-image2" style={{ width: '70px' }}/>
              <span className="home-text34">
                hello world
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column">
                <span className="home-header2">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="home-navlink03">
                    <span className="home-text35">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column1">
                <span className="home-header3">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column2">
                <span className="home-header4">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text37">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button2 button">
              <img alt="image" src="/arrow.svg" className="home-image3" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container8">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
