import React from 'react'
import slider3 from "../Images/slider3.jpg"
import './Fulljob.css'
// import Jobcard from '../Components/Jobcard'
const Fulljob = () => {
  const textdata=[
    {
      "id":"1",
      // "img":{slider3},
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    },
    {
      "id":"1",
      "Title":"Senior Associate",
      "Company":"Morgan",
      "Branch":"CSE AI ML",
      "Deadline":"28 March",
      "Post":"Junior Developer",
    }
  ]

  const DisplayData=textdata.map((props)=>{
    return(
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
  )})

  return (
    <section className="full-job">
      <div className="job-header">
        <div className="container">
          <h2>All Jobs</h2>
        </div>
      </div>
    <section className="container">
    <h3 className="aj">Active jobs</h3>
      <div className="active-job">
          <div className="post-collection">
              {DisplayData}
          </div>
        </div>
      </section>  
    </section>
  )
}
export default Fulljob;