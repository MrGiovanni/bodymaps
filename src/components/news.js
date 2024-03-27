import React from 'react'

import PropTypes from 'prop-types'

import './news.css'

const News = (props) => {
  return (
    <section className={`news-news ${props.rootClassName} `}>
      <div className="news-previous banner-smaller banner"></div>
      <div className="banner news-current">
        <div className="news-controls swiper-pagination">
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 1"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 2"
            className="swiper-pagination-bullet-active swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 3"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 4"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 5"
            className="swiper-pagination-bullet"
          ></span>
        </div>
      </div>
      <div className="news-next banner-smaller banner"></div>
    </section>
  )
}

News.defaultProps = {
  rootClassName: '',
}

News.propTypes = {
  rootClassName: PropTypes.string,
}

export default News
