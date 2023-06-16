// import React from 'react'
import Footer from '../Components/Footer'
import './Award.css'
import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Collapse from 'react-bootstrap/Collapse';
import awardee1 from '../Images/awardee1.jpeg'
import awardcover from '../Images/awardcover.jpg'
import Header from '../Components/Header'


const Award = () => {


  const [open, setOpen] = useState(false);
  return (
    <div className="award">
      {<Header/>}
      <div className="award-head">
              <h2>Distinguished Alumni Award Winners</h2>
              <div className="award-cover">
                <img src={awardcover}/>
              </div>
      </div>
      <div className="award-container container">
          <ul className="ul-award">
            <details>
              <summary>
                Distinguished Alumni Award winner 2023
              </summary>
                <div className="awardees-info">
                  <div>
                  <hr/>
                  <ul>
                    <h4>Academics & Research</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Dr. Gautam Dasary</h6>
                        <p>B.Tech ECE 2008</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Corporate Career</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Arunkumar Govindarajan</h6>
                        <p>B.E Mech 1997</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Enterprenueurship</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Kv Suresh</h6>
                        <p>B.E. ECE, 1991</p>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </details>
          </ul>

          <ul className="ul-award">
            <details>
              <summary>
                Distinguished Alumni Award winner 2022
              </summary>
                <div className="awardees-info">
                  <div>
                  <hr/>
                  <ul>
                    <h4>Academics & Research</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Dr. Gautam Dasary</h6>
                        <p>B.Tech ECE 2008</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Corporate Career</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Arunkumar Govindarajan</h6>
                        <p>B.E Mech 1997</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Enterprenueurship</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Kv Suresh</h6>
                        <p>B.E. ECE, 1991</p>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </details>
          </ul>

          <ul className="ul-award">
            <details>
              <summary>
                Distinguished Alumni Award winner 2021
              </summary>
                <div className="awardees-info">
                  <div>
                  <hr/>
                  <ul>
                    <h4>Academics & Research</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Dr. Gautam Dasary</h6>
                        <p>B.Tech ECE 2008</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Corporate Career</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Arunkumar Govindarajan</h6>
                        <p>B.E Mech 1997</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Enterprenueurship</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Kv Suresh</h6>
                        <p>B.E. ECE, 1991</p>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </details>
          </ul>

          <ul className="ul-award">
            <details>
              <summary>
                Distinguished Alumni Award winner 2020
              </summary>
                <div className="awardees-info">
                  <div>
                  <hr/>
                  <ul>
                    <h4>Academics & Research</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Dr. Gautam Dasary</h6>
                        <p>B.Tech ECE 2008</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Corporate Career</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Arunkumar Govindarajan</h6>
                        <p>B.E Mech 1997</p>
                      </div>
                    </div>
                  </ul>
                  <ul>
                    <h4>Enterprenueurship</h4>
                    <hr/>
                    <div className="award-grid-container">
                      <div className="awardee-img">
                        <img src={awardee1}/>
                      </div>
                      <div className="awardee-designation">
                        <h6>Mr. Kv Suresh</h6>
                        <p>B.E. ECE, 1991</p>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </details>
          </ul>


       </div>
      {<Footer/>}
    </div>
    
  )
}

export default Award