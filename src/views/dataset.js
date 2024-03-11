import React from 'react'

import { Helmet } from 'react-helmet'

import './dataset.css'

const Dataset = (props) => {
  return (
    <div className="dataset">
      <Helmet>
        <title>Dataset</title>
      </Helmet>
      <h1>Dataset</h1>
      <p>Our amazing dataset</p>
    </div>
  )
}

export default Dataset
