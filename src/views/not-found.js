import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container1">
        <h1 className="not-found-text1">404</h1>
      </div>
      <div className="not-found-container2">
        <h2 className="not-found-text2">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
