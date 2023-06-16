import React from 'react'
import Footer from '../Components/Footer'
import mov_bbb from '../Images/mov_bbb.mp4'
import './Video.css'
import Header from '../Components/Header'
const Video = () => {
  return (
    <div className="video">
      {<Header/>}
      <div className="container video-container">
      <div className="video-albums">
          <h1> Video Albums </h1>
        </div>
        <div className="video-gallery">
          <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              </div>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              </div>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              </div>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video">
                <video controls>
                  <source src={mov_bbb} type="video/mp4" />
                </video>
              </div>
              <div className="video-cap">
                <p>IISc Reunion-Sports Meet 2039</p>
              </div>
            </div>
            
            
          </div>
      </div>
      {<Footer/>}
    </div>
  )
}

export default Video