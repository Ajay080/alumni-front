import React from 'react'
import slider3 from "../Images/slider3.jpg"

const Jobcard = ({props}) => {
  return (
    <div className="post-card">
            <div className="card-cover">
              <img src={slider3}/>
            </div>
            <div>
              <ul className="head-desc">
                <h5>{props.Title}</h5>
                <p><b>{props.Company}</b></p>
                <hr/>
              </ul>
              <ul className="desc">
                <li>{props.Branch}</li>
                <li>{props.Deadline}</li>
                <li>{props.Post}</li>
              </ul>
            </div>
        </div>
  )
}

export default Jobcard