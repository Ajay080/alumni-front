import React from 'react'
import Footer from '../Components/Footer'
import wiser from '../Images/wiser.png'
import './wiser.css'
import Header from '../Components/Header'

const Wiser = () => {
  return (
    <div className="wiser">
      {<Header/>}
      <div className="wiser-head">
          <h2>WISER</h2>
        </div>
      <div className="wiser-container container">
        <div className="wiser-img">
          <img src={wiser}/>
        </div>
        <div className="wiser-text">
          <p>Dr. Rajeshwari Chatterjee, the First Women Engineer to Join IISc after her PhD from University of Michigan as Faculty after her initial tryst as Research Scholar at IISc. ( Photo Courtecy CONNECT, IISc.,)</p>
          <br/>
          <strong>What is WISER ?</strong>
          <br/>
          <p>
          It is the abbreviated form for "WOMEN IN SCIENCE, ENGINEERING & RESEARCH" a dedicated wing and platform started by the IISc Alumni Association to encourage women Alumni of IISc in the field of Science, Engineering and Reserch to come together to foster and encourage more women to actively involve in these fields.
          </p>
          <br/>
          <strong> WOMEN IN SCIENCE, ENGINEERING AND RESEARCH</strong>
          <br/>
          <strong>Why WISER ?</strong>
          <br/>
          <br/>
          <p>
          According to research studies, involvement of women in the science of medicines and science of agricultural produce is nearly 12000 years old. They are credited to be the pioneers and key inventors of these great areas of science which kept the Homo Sapiens sustain and emerge as one of the most able and powerful species to rule the planet. Scientists credit food produce among humans began as a systematic science of agriculture from a careful observation made by a pregnant woman holed up in cave for several months for safety, found corn plants grown all around the cave brimming with corn buds from the waste grains she disposed after her good meal few months back. From then on, the fundamental science of growing food grains systematically through agriculture emanated from women who shown the world that by seedling grains of food in the earth soil would give them enough food grains which they can produce in bulk, store and consume over a period. The contribution of women in these areas of science has revolutionised the human sucess and development to emerge as the most powerful species on earth. This contribution though seems fundamental and routine, scinetists working on biology of human evolution rate this as one of the most important innovation in the history of human evolution having profound impact on the human success. We have several great scientists among women whose contribution to modern science is significant and unforgettable.
          </p><br/><p>
          The natures’ extraordinary gift to procreate, upbring and safeguard the human offspring have pushed women to back track in the race against men in many fields. Women in Science and Technology though a minority, are now beginning to occupy a prime position in once male dominated field. Presence of women in every area of Science, Engineering and Technology is visibly witnessed in the recent past. They have taken up key positions in several Public Sector Enterprises, National Laboratories and Research organizations besides heading many MNCs.
          </p><br/><p>
          However, considering the presence of small numbers, there is a need to give further momentum to this growing trend to encourage women in the area of Science, Technology and Research. Realizing the need to encourage women and fortify them with more opportunities to enlarge their presence in these fields, the IISc Alumni Association has come up with a dedicated wing titled “WOMEN IN SCIENCE, ENGINEERING AND RESEARCH” for short “WISER”. This wing is meant to be exclusively for the women of IISc in the field of Science, Technology and Research.
          </p><br/><p>
          Exlcusive pages are now dedicated in our official web portal to the cause of encouraging women Scientists, Engineers and Technologists to emerge as leaders in this area. The IISc Alumni Association Executive Council makes request to women Scientists, Engineers and Researchers among our Alumni fraternity to take active part in promoting this new dedicated wing.
          </p><br/><p>
          The Alumni Association seeks ambitious and talented volunteers among women Alumni to come forward to Chair this wing and actively participate with the IISc Alumni Association in the cause of promoting women in the field of Science, Engineering and Research.
          </p>
        </div>
      </div>
      {<Footer/>}
    </div>
  )
}

export default Wiser