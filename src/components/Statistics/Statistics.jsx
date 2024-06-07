import React from 'react'
import './Statistics.css'

function Statistics(props) {
  return (
    <div className="stats">
        <div className="statsText">
            <h2>{props.ct2d}</h2>
            <p className="statsP">2D CT images</p>
        </div>
        <div className="statsText">
            <h2>{props.ct3d}</h2>
            <p className="statsP">3D CT volumes</p>
        </div>
        <div className="statsText">
            <h2>{props.structs}</h2>
            <p className="statsP">annotated structures</p>
        </div>
        <div className="statsText">
            <h2>{props.hospitals}</h2>
            <p className="statsP">hospitals</p>
        </div>
    </div>
  )
}

export default Statistics