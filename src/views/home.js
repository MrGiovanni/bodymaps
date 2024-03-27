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

import DownloadIcon from '@mui/icons-material/Download';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import './home.css'
import { IconButton, Typography, Stack } from '@mui/material';
import { set } from 'mongoose';
import { func } from 'prop-types';

const Home = (props) => {
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)

  const videoRef11 = useRef(null)
  const videoRef12 = useRef(null)
  const videoRef13 = useRef(null)

  const [contrls1, setContrls1] = useState(true)
  const [contrls2, setContrls2] = useState(true)
  const [contrls3, setContrls3] = useState(true)

  const [controls11, setControls11] = useState(true)
  const [controls12, setControls12] = useState(true)
  const [controls13, setControls13] = useState(true)

  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(0)
  const [time3, setTime3] = useState(0)
  const [duration1, setDuration1] = useState(0)
  const [duration2, setDuration2] = useState(0)
  const [duration3, setDuration3] = useState(0)

  const [time11, setTime11] = useState(0)
  const [time12, setTime12] = useState(0)
  const [time13, setTime13] = useState(0)
  const [duration11, setDuration11] = useState(0)
  const [duration12, setDuration12] = useState(0)
  const [duration13, setDuration13] = useState(0)
  
  const [disabled1, setDisabled1] = useState(true)
  const [disabled2, setDisabled2] = useState(false)

  const [disabled11, setDisabled11] = useState(true)
  const [disabled12, setDisabled12] = useState(false)

  const [value, setValue] = useState(0);
  const [key, setKey] = useState(1)

  const [value1, setValue1] = useState(0);
  const [key1, setKey1] = useState(1)

  const [background1, setBackground1] = useState('transparent')
  const [background2, setBackground2] = useState('transparent')
  const [background3, setBackground3] = useState('transparent')

  const [background11, setBackground11] = useState('transparent')
  const [background12, setBackground12] = useState('transparent')
  const [background13, setBackground13] = useState('transparent')

  const [zindex1, setZindex1] = useState(0)
  const [zindex2, setZindex2] = useState(10)
  const [zindex3, setZindex3] = useState(10)

  const [zindex11, setZindex11] = useState(0)
  const [zindex12, setZindex12] = useState(10)
  const [zindex13, setZindex13] = useState(10)

  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const [isCollapsed11, setIsCollapsed11] = useState(true);
  const [isCollapsed12, setIsCollapsed12] = useState(true);
  const [isCollapsed13, setIsCollapsed13] = useState(true);

  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [videoHeight1, setVideoHeight1] = useState('0px')
  const [videoHeight2, setVideoHeight2] = useState('0px')
  const [videoHeight3, setVideoHeight3] = useState('0px')

  const [videoHeight11, setVideoHeight11] = useState('0px')
  const [videoHeight12, setVideoHeight12] = useState('0px')
  const [videoHeight13, setVideoHeight13] = useState('0px')

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function handleResize() {
      console.log('window.innerWidth:',window.innerWidth);
      setWindowSize(window.innerWidth)
      if (videoRef1.current) {
        setVideoHeight1(videoRef1.current.clientHeight)
        console.log('videoRef1.current.videoHeight:',videoRef1.current.clientHeight)
      }
      if (videoRef2.current) {
        setVideoHeight2(videoRef2.current.clientHeight)
        console.log('videoRef2.current.videoHeight:',videoRef2.current.clientHeight)
      }
      if (videoRef3.current) {
        setVideoHeight3(videoRef3.current.clientHeight)
        console.log('videoRef3.current.videoHeight:',videoRef3.current.clientHeight)
      }
      if (videoRef11.current) {
        setVideoHeight11(videoRef11.current.clientHeight)
        console.log('videoRef11.current.videoHeight:',videoRef11.current.clientHeight)
      }
      if (videoRef12.current) {
        setVideoHeight12(videoRef12.current.clientHeight)
        console.log('videoRef12.current.videoHeight:',videoRef12.current.clientHeight)
      }
      if (videoRef13.current) {
        setVideoHeight13(videoRef13.current.clientHeight)
        console.log('videoRef13.current.videoHeight:',videoRef13.current.clientHeight)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }
  )

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

  const handlePlay11 = () => {
    if (videoRef11.current) {
      videoRef11.current.play()
    }
  }
  const handlePause11 = () => {
    if (videoRef11.current) {
      videoRef11.current.pause()
    }
  }
  const handlePlay12 = () => {
    if (videoRef12.current) {
      videoRef12.current.play()
    }
  }
  const handlePause12 = () => {
    if (videoRef12.current) {
      videoRef12.current.pause()
    }
  }
  const handlePlay13 = () => {
    if (videoRef13.current) {
      videoRef13.current.play()
    }
  }
  const handlePause13 = () => {
    if (videoRef13.current) {
      videoRef13.current.pause()
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
        // setBackground2('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground2('rgba(2, 2, 2, 0.8)')
        setContrls1(true)
        setContrls2(false)
        setContrls3(false)
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
        // setBackground1('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground1('rgba(2, 2, 2, 0.8)')
        setBackground2('transparent')
        // setBackground3('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground3('rgba(2, 2, 2, 0.8)')
        setContrls1(false)
        setContrls2(true)
        setContrls3(false)
        break
      case 3:
        handlePause2()
        handlePlay3()
        setZindex1(10)
        setZindex2(10)
        setZindex3(0)
        setDisabled2(true)
        setDisabled1(false)
        // setBackground2('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.216))')
        setBackground2('rgba(2, 2, 2, 0.8)')
        setBackground3('transparent')
        setContrls1(false)
        setContrls2(false)
        setContrls3(true)
        break
      default:
        setBackground1('transparent')
        break
    }
  }, [key])

  useEffect(() => {
    setValue1(key1-1)
    switch (key1) {
      case 1:
        handlePlay11()
        handlePause12()
        setDisabled11(true)
        setDisabled12(false)
        setZindex11(0)
        setZindex12(10)
        setZindex13(10)
        setBackground11('transparent')
        // setBackground2('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground12('rgba(2, 2, 2, 0.8)')
        setControls11(true)
        setControls12(false)
        setControls13(false)
        break
      case 2:
        handlePause11()
        handlePlay12()
        handlePause13()
        setZindex11(10)
        setZindex12(0)
        setZindex13(10)
        setDisabled11(false)
        setDisabled12(false)
        // setBackground1('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground11('rgba(2, 2, 2, 0.8)')
        setBackground12('transparent')
        // setBackground3('linear-gradient(0.25turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.116))')
        setBackground13('rgba(2, 2, 2, 0.8)')
        setControls11(false)
        setControls12(true)
        setControls13(false)
        break
      case 3:
        handlePause12()
        handlePlay13()
        setZindex11(10)
        setZindex12(10)
        setZindex13(0)
        setDisabled12(true)
        setDisabled11(false)
        // setBackground2('linear-gradient(0.75turn,rgb(0, 0, 0), rgba(0, 0, 0, 0.216))')
        setBackground12('rgba(2, 2, 2, 0.8)')
        setBackground13('transparent')
        setControls11(false)
        setControls12(false)
        setControls13(true)
        break
      default:
        setBackground11('transparent')
        break
    }
  }, [key1])

  useEffect(() => {
    switch(key){
      case 1:
        if (videoRef1.current) {
          console.log('videoRef1.current:',videoRef1.current);
          videoRef1.current.addEventListener('timeupdate', () => {
            if (videoRef1.current) {
              setTime1(videoRef1.current.currentTime)
              setDuration1(videoRef1.current.duration)
            }
          })
        }
        break
      case 2:
        if (videoRef2.current) {
          videoRef2.current.addEventListener('timeupdate', () => {
            if (videoRef2.current) {
              setTime2(videoRef2.current.currentTime)
              setDuration2(videoRef2.current.duration)
            }
          })
        }
        break
      case 3:
        if (videoRef3.current) {
          videoRef3.current.addEventListener('timeupdate', () => {
            if (videoRef3.current) {
              setTime3(videoRef3.current.currentTime)
              setDuration3(videoRef3.current.duration)
            }
          })
        }
        break
      default:
        break
    }
  }, [key])

  useEffect(() => {
    switch(key1){
      case 1:
        if (videoRef11.current) {
          console.log('videoRef11.current:',videoRef11.current);
          videoRef11.current.addEventListener('timeupdate', () => {
            if (videoRef11.current) {
              setTime11(videoRef11.current.currentTime)
              setDuration11(videoRef11.current.duration)
            }
          })
        }
        break
      case 2:
        if (videoRef12.current) {
          videoRef12.current.addEventListener('timeupdate', () => {
            if (videoRef12.current) {
              setTime12(videoRef12.current.currentTime)
              setDuration12(videoRef12.current.duration)
            }
          })
        }
        break
      case 3:
        if (videoRef13.current) {
          videoRef13.current.addEventListener('timeupdate', () => {
            if (videoRef13.current) {
              setTime13(videoRef13.current.currentTime)
              setDuration13(videoRef13.current.duration)
            }
          })
        }
        break
      default:
        break
    }
  }
  , [key1])

  const download1 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000004.mp4'
    link.download = 'BDMAP_00000004.mp4'
    link.click()
  }
  const download2 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000008.mp4'
    link.download = 'BDMAP_00000008.mp4'
    link.click()
  }
  const download3 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000009.mp4'
    link.download = 'BDMAP_00000009.mp4'
    link.click()
  }

  const download11 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000004.mp4'
    link.download = 'BDMAP_00000004.mp4'
    link.click()
  }
  const download12 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000008.mp4'
    link.download = 'BDMAP_00000008.mp4'
    link.click()
  }
  const download13 = () => {
    const link = document.createElement('a')
    link.href = '/BDMAP_00000009.mp4'
    link.download = 'BDMAP_00000009.mp4'
    link.click()
  }

  const formatTime = (time,remaining) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const remainingMinutes = Math.floor(remaining / 60)
    const remainingSeconds = Math.floor(remaining % 60)
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds} / ${remainingMinutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
  }
  
  return (
    <div className="home-container">
      <Helmet>
        <title>Body Maps</title>
        <meta property="og:description" content="3D Atlas of Human Body" />
        <meta property="og:image" content="/icon.png" />
      </Helmet>
      <section className="home-hero" style={{backgroundColor:'white'}}>
        <header data-thq="thq-navbar" className="home-navbar">
          <div style={{display:'flex', alignItems:'center',alignContent:'center'}}>
            <img alt="image" src="/icon.png" className="home-branding" style={{ width: '70px' }} />
            &nbsp;&nbsp;
            {windowSize>780? (
            <div style={{color:"rgba(51, 96, 231, 1)",fontWeight:'800',fontSize:'2.5vw'}}>Body Maps</div>):(
            <div style={{color:"rgba(51, 96, 231, 1)",fontWeight:'600',fontSize:'15px',width:'30%',marginTop:'10px'}}>Body Maps</div>
            )}
          </div>
          <div className="dataset-desktop-menu">
            {windowSize>780?
            (<nav className="dataset-links"
              style={{
                color:'rgb(230, 223, 223)',
                display: 'flex',
                justifyContent:'flex-end',
                marginRight: '30px',
                alignContent: 'center',
                }}
            >
              <Link to="/" className="dataset-navlink" style={{color:'rgba(11, 11, 11, 1)', fontWeight:'500'}}>
                Home
              </Link>
              <Link to='/dataset' className="dataset-text" style={{color:'rgba(11, 11, 11, 1)', fontWeight:'500'}}>Dataset</Link>
              <Link to='/model' className="dataset-text1" style={{color:'rgba(11, 11, 11, 1)', fontWeight:'500'}}>Model</Link>
              <Link to='/leaderboard' className="dataset-text2" style={{color:'rgba(11, 11, 11, 1)', fontWeight:'500'}}>Leaderboard</Link>
              <Link to='/team' className="dataset-text3" style={{color:'rgba(11, 11, 11, 1)', fontWeight:'500'}}>Team</Link>
            </nav>
            )
            :(
              <div style={{
                color:'white',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                marginLeft:'75%'
              }}>
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Menu
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                  'color':'grey'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "rgba(51, 96, 231,, 0.68)"
                  }
                }}
              >
                <MenuItem 
                  style={{
                    color:'rgba(11, 11, 11, 1)'
                  }}
                  onClick={
                    () => {
                      handleClose()
                      window.location.href = '/dataset'
                    }
                }>Dataset</MenuItem>
                <MenuItem 
                  style={{
                    color:'rgba(11, 11, 11, 1)'
                  }}
                  onClick={
                    () => {
                      handleClose()
                      window.location.href = '/model'
                    }
                }>Model</MenuItem>
                <MenuItem 
                  style={{
                    color:'rgba(11, 11, 11, 1)'
                  }}
                  onClick={
                    () => {
                      handleClose()
                      window.location.href = '/leaderboard'
                    }
                }>Leaderboard</MenuItem>
                <MenuItem 
                  style={{
                    color:'rgba(11, 11, 11, 1)'
                  }}
                  onClick={
                    () => {
                      handleClose()
                      window.location.href = '/team'
                    }
                }>Team</MenuItem>
              </Menu>
            </div>
            )}
          </div>
        </header>
      </section>
      <section  className="home-data" style={{backgroundColor:'white'}}>
      <div style={{marginTop:'55px',marginBottom:'25px', display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1>
            <span style={{fontSize:'7vw'}}>AbdonmenAtlas 1.0</span>
          </h1>
          <br></br>
          <p style={{fontWeight:'500',fontSize:'2vw',marginTop:'-15px'}}>
            Status: Released
          </p>
        </div>
      <div style={{ 
        marginTop: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 44, 
        }}
        >
        <Button variant="outlined" 
          onClick={()=>{window.open('https://github.com/', '_blank');}}
          sx={{ 
            width: '100px',
            borderColor: 'black', 
            color: 'black', 
            '&:hover': {
              borderColor: 'black', 
              backgroundColor: 'rgba(168, 168, 168, 0.51)' 
            }
          }}
        >Paper</Button>
        <Button variant="outlined" 
          onClick={()=>{window.open('https://github.com/', '_blank');}}
          sx={{ 
            width: '100px',
            borderColor: 'black', 
            color: 'black', 
            '&:hover': {
              borderColor: 'black', 
              backgroundColor: 'rgba(168, 168, 168, 0.51)' 
            }
          }}
        >Github</Button>
        <Button variant="outlined" 
          onClick={()=>{window.open('https://github.com/', '_blank');}}
          sx={{ 
            width: '100px',
            borderColor: 'black', 
            color: 'black', 
            '&:hover': {
              borderColor: 'black', 
              backgroundColor: 'rgba(168, 168, 168, 0.51)' 
            }
          }}
        >Dataset</Button>
      </div>
      <br/>
      <br/>
      <div style={{ 
        marginBottom: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 80, 
        }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>1.9 million</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>2D CT images</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>5,195</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>3D CT volumes</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>9</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>annotated structures</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>26</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>hospitals</span>
          </div>

      </div>
      <br/>
      <div style={{alignContent: 'center', textAlign: 'center', color:'black',fontSize: '20px', fontWeight: '100', }}>
        <IconButton aria-label="left" size="large" onClick={e=>{key==2?(setValue(key-2),setKey(key-1)):(setValue(key-2),setKey(key-1))}} disabled={disabled1}>
          <img alt="image" src={disabled1==false?"/left-arrow-disabled.svg":"/left-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
          {key}/3
        <IconButton aria-label="right" size="large" onClick={e=>{key==2?(setValue(key),setKey(key+1)):(setValue(key),setKey(key+1))}} disabled={disabled2}>
          <img alt="image" src={disabled2==false?"/right-arrow-disabled.svg":"/right-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
        </div>

        <Carousel
          value={value}
          onChange={()=>{setValue(key-1),console.log("key:",key),console.log("value:",value)}}
          className='home-carousel'
          offset={10}
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
          <div className='home-video_back' style={{background: background1, zIndex:zindex1, height:videoHeight1 }}/> 
          <video 
            ref={videoRef1} 
            id="video1" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls={contrls1}
            autoPlay
            onPlay={() => {
              if (videoRef1.current) {
                videoRef1.current.addEventListener('timeupdate', () => {
                  if (videoRef1.current) {
                    setTime1(videoRef1.current.currentTime);
                    setDuration1(videoRef1.current.duration);
                  }
                });
                setVideoHeight1(videoRef1.current.clientHeight)
                console.log('videoRef1.current.videoHeight:',videoRef1.current.clientHeight)
              }
              if (videoRef2.current) {
                setVideoHeight2(videoRef2.current.clientHeight)
                console.log('videoRef2.current.videoHeight:',videoRef2.current.clientHeight)
              }
              if (videoRef3.current) {
                setVideoHeight3(videoRef3.current.clientHeight)
                console.log('videoRef3.current.videoHeight:',videoRef3.current.clientHeight)
              }
            }} 
            playsInline 
            className="home-video1x" 
            disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems:'flex-start',
            justifyContent: 'space-between',
            // alignItems: 'center',
            }} >
            <div style={{
              width:'60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              }}
            >
            <span
              className="home-text23x" 
              style={isCollapsed1 ? { 
                color:'rgba(11, 11, 11, 1)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '1',
              } : {
                color:'rgba(11, 11, 11, 1)',
              }}
            >
            Italian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian Pup
            </span>
            
            <IconButton aria-label="more" size="small" onClick={
              () => {
                setIsCollapsed1(!isCollapsed1)
              }
            }>
              {!isCollapsed1 ? <ArrowDropUpIcon style={{ color: 'rgba(11, 11, 11, 1)' }} /> : <ArrowDropDownIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />}
              {isCollapsed1 ? <div style={{fontSize:'0.8rem', color:'rgb(141, 140, 140)'}}>More</div>:<div style={{fontSize:'0.8rem', color:'rgb(141, 140, 140)'}}>Fold</div>}
            </IconButton>
            </div>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time1,duration1)}</span>
            <IconButton aria-label="download" size="small" onClick={download1}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
          </div>
        </div>
        <div onClick={e=>{setKey(2)}}>
          <div className='home-video_back' style={{background: background2, zIndex:zindex2,height:videoHeight2 }}/>
          <video 
            ref={videoRef2} 
            id="video2" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls = {contrls2}
            playsInline disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
            className="home-video1x"
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            alignItems:'flex-start',
            }} >
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>Otter on Surfboard</span>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time2,duration2)}</span>
            <IconButton aria-label="download" size="small" onClick={download2}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
          </div>
        </div>
        <div onClick={e=>{setKey(3)}}>
          <div className='home-video_back' style={{background: background3, zIndex:zindex3,height:videoHeight3 }}/>
          <video
            ref={videoRef3} 
            id="video3" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls = {contrls3}
            playsInline disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
            className="home-video1x"
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            alignItems:'flex-start',
            }} >
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}} >SUV in the Dust</span>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time3,duration3)}</span>
            <IconButton aria-label="download" size="small" onClick={download3}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
            </div>
        </div>
        </Carousel>
      </section>


{/* 


1.1

*/}




      <section  className="home-data" style={{backgroundColor:'white'}}>
      <div style={{marginTop:'55px',marginBottom:'25px', display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1>
            <span style={{fontSize:'7vw'}}>AbdonmenAtlas 1.1</span>
          </h1>
          <br></br>
          <p style={{fontWeight:'500',fontSize:'2vw',marginTop:'-15px'}}>
            Status: In progress
          </p>
        </div>
      <div style={{ 
        marginTop: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 44, 
        }}
        >
        <Button variant="outlined" 
          onClick={()=>{window.open('https://github.com/', '_blank');}}
          sx={{ 
            width: '100px',
            borderColor: 'black', 
            color: 'black', 
            '&:hover': {
              borderColor: 'black', 
              backgroundColor: 'rgba(168, 168, 168, 0.51)' 
            }
          }}
        >Paper</Button>
        <Button variant="outlined" 
          onClick={()=>{window.open('https://github.com/', '_blank');}}
          sx={{ 
            width: '100px',
            borderColor: 'black', 
            color: 'black', 
            '&:hover': {
              borderColor: 'black', 
              backgroundColor: 'rgba(168, 168, 168, 0.51)' 
            }
          }}
        >Github</Button>
      </div>
      <br/>
      <br/>
      <div style={{ 
        marginBottom: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 80, 
        }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>3.7 million</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>2D CT images</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>9,262</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>3D CT volumes</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>25</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>annotated structures</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <span style={{fontSize:'3vw',fontWeight:'700'}}>88</span>
            <span style={{fontSize:'1.8vw',fontWeight:'300'}}>hospitals</span>
          </div>

      </div>
      <br/>
      <div style={{alignContent: 'center', textAlign: 'center', color:'black',fontSize: '20px', fontWeight: '100', }}>
        <IconButton aria-label="left" size="large" onClick={e=>{key1==2?(setValue1(key1-2),setKey1(key1-1)):(setValue1(key1-2),setKey1(key1-1))}} disabled={disabled11}>
          <img alt="image" src={disabled11==false?"/left-arrow-disabled.svg":"/left-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
          {key1}/3
        <IconButton aria-label="right" size="large" onClick={e=>{key1==2?(setValue1(key1),setKey1(key1+1)):(setValue1(key1),setKey1(key1+1))}} disabled={disabled12}>
          <img alt="image" src={disabled12==false?"/right-arrow-disabled.svg":"/right-arrow.svg"} style={{ width: '40px' }}/>
        </IconButton>
        </div>

        <Carousel
          value={value1}
          onChange={()=>{setValue1(key1-1),console.log("key:",key1),console.log("value:",value1)}}
          className='home-carousel'
          offset={10}
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
        <div onClick={e=>{setKey1(1)}}>
          <div className='home-video_back' style={{background: background11, zIndex:zindex11, height:videoHeight11 }}/> 
          <video 
            ref={videoRef11} 
            id="video1" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls={controls11}
            autoPlay
            onPlay={() => {
              if (videoRef11.current) {
                videoRef11.current.addEventListener('timeupdate', () => {
                  if (videoRef11.current) {
                    setTime11(videoRef11.current.currentTime);
                    setDuration11(videoRef11.current.duration);
                  }
                });
                setVideoHeight11(videoRef11.current.clientHeight)
                console.log('videoRef11.current.videoHeight:',videoRef11.current.clientHeight)
              }
              if (videoRef12.current) {
                setVideoHeight12(videoRef12.current.clientHeight)
                console.log('videoRef12.current.videoHeight:',videoRef12.current.clientHeight)
              }
              if (videoRef13.current) {
                setVideoHeight13(videoRef13.current.clientHeight)
                console.log('videoRef13.current.videoHeight:',videoRef13.current.clientHeight)
              }
            }} 
            playsInline 
            className="home-video1x" 
            disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems:'flex-start',
            justifyContent: 'space-between',
            // alignItems: 'center',
            }} >
            <div style={{
              width:'60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              }}
            >
            <span
              className="home-text23x" 
              style={isCollapsed11 ? { 
                color:'rgba(11, 11, 11, 1)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '1',
              } : {
                color:'rgba(11, 11, 11, 1)',
              }}
            >
            Italian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian PupItalian Pup
            </span>
            
            <IconButton aria-label="more" size="small" onClick={
              () => {
                setIsCollapsed11(!isCollapsed11)
              }
            }>
              {!isCollapsed11 ? <ArrowDropUpIcon style={{ color: 'rgba(11, 11, 11, 1)' }} /> : <ArrowDropDownIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />}
              {isCollapsed11 ? <div style={{fontSize:'0.8rem', color:'rgb(141, 140, 140)'}}>More</div>:<div style={{fontSize:'0.8rem', color:'rgb(141, 140, 140)'}}>Fold</div>}
            </IconButton>
            </div>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time11,duration11)}</span>
            <IconButton aria-label="download" size="small" onClick={download11}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
          </div>
        </div>
        <div onClick={e=>{setKey1(2)}}>
          <div className='home-video_back' style={{background: background12, zIndex:zindex12,height:videoHeight12 }}/>
          <video 
            ref={videoRef12} 
            id="video2" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls = {controls12}
            playsInline disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
            className="home-video1x"
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            alignItems:'flex-start',
            }} >
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>Otter on Surfboard</span>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time12,duration12)}</span>
            <IconButton aria-label="download" size="small" onClick={download12}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
          </div>
        </div>
        <div onClick={e=>{setKey1(3)}}>
          <div className='home-video_back' style={{background: background13, zIndex:zindex13,height:videoHeight13 }}/>
          <video
            ref={videoRef13} 
            id="video3" 
            src="/BDMAP_00000004.mp4" 
            loop 
            muted 
            preload="auto" 
            controls = {controls13}
            playsInline disablePictureInPicture="true" 
            disableRemotePlayback="true" 
            controlsList='nodownload noremoteplayback noplaybackrate' 
            className="home-video1x"
          />
          <br/><br/>
          <div style={{
            marginLeft:'20px',
            marginRight:'20px',
            color:'black',
            fontSize: '20px', 
            fontWeight: '100',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            alignItems:'flex-start',
            }} >
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}} >SUV in the Dust</span>
            <span className="home-text23x" style={{color:'rgba(11, 11, 11, 1)'}}>{formatTime(time13,duration13)}</span>
            <IconButton aria-label="download" size="small" onClick={download13}>
              <DownloadIcon style={{ color: 'rgba(11, 11, 11, 1)' }} />
            </IconButton>
            </div>
        </div>
        </Carousel>
      </section>
      
    </div>
  )
}

export default Home
