import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  const [needSticky, setNeedSticky] = React.useState(false)
  const stickyObj = needSticky ? { position: 'fixed', top: '-600px' } : {}
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
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
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
      <h1>Heading</h1>
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
            animation="openAnimation">
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
