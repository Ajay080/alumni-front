import React from 'react'
import Footer from '../Components/Footer'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSlack} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import {RxCrossCircled} from 'react-icons/rx'
import {Link} from "react-router-dom"
import Header from '../Components/Header'

import './Career.css'
const Career = () => {
  return (
    <div className="connection">
      {<Header/>}
      <div className="connection-container container">
      <div className="TipsTemplates">
            <div className="TipsHead">
              <h1>Tips and Template</h1>
            </div>
            <div className="resumetip">
              <div className="resume-head">
                <h2>Resume Tips</h2>
              </div>
                <hr/>
                <br/>
                <h4 className="head">How to write a good Resume</h4>
                <br/>
                <p>Your resume must clearly, concisely and strategically present your qualifications to get a recruiter interested in meeting you. It should convey your skills, work experience and assets. The resume is used to describe what you can accomplish professionally in a manner that also illustrates what you can do for an employer. Job opportunities can arise unexpectedly. An updated modern resume is the key to a successful job search. Here are some do's and don'ts of how to write a good resume and what to include.</p>
                <div className="resume-do">
                <h4 className="head">Resume Writing Do's</h4>
                <br/>
                <ul className="resumeDo">
                    <h5><TiTick/> Keep your resume clear and concise </h5>
                    <hr/>
                    <p>An employer takes an average of 30 seconds to skim a resume. You want them to see right away that you are qualified for the position.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Proofread your resume numerous times </h5>
                    <hr/>
                    <p>Be sure there are no spelling or grammar mistakes. Have someone else read it over as well. A simple spelling mistake on a resume can give a negative impression to the employer. It can even prevent you from getting the job.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Limit your resume to two pages </h5>
                    <hr/>
                    <p>Place the emphasis of your resume on your most recent experience. Older jobs and experience that are more than 15 years old should either be cut out or minimized. This way, the employer can focus on more relevant information.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Tailor your resume to suit the position you are applying for </h5>
                    <hr/>
                    <p>Specify work experience or achievements that are related to the position you are applying to. This can be done by reviewing the job description or the employer website.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Highlight what you have accomplished </h5>
                    <hr/>
                    <p>You want to be able to identify the best examples of where you demonstrated your skills. These examples should speak to what you achieved in your role, and should demonstrate what kind of employee you are. It is best to include this information in the "Work experience" section of the resume.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Be Honest </h5>
                    <hr/>
                    <p>Lying on your resume is never a good idea. You don't want to overstate your skills or results as it will mislead the employer. Have confidence in what you have to offer.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Quantify your achievements </h5>
                    <hr/>
                    <p>Use firm numbers that the employer will understand and be impressed by. For example, how many people you supervised, how many products you sold, by what percentage you increased sales, etc.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Use simple words and action verbs</h5>
                    <hr/>
                    <p>The person reading your resume might not always be the employer. Resumes can be reviewed by recruiters or Human Resources specialists who may not be familiar with your specific field. Use simple and plain language, but also persuasive verbs such as handled, managed, led, developed, increased, accomplished, leveraged, etc.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Include unpaid work that show off your skills</h5>
                    <hr/>
                    <p>If you have volunteered with a well-known organization or worked for an important cause, put it in your resume. You should include these experiences under the "Work experience" or the "Volunteer work" section, especially if they are related to the position you are applying for.</p>
                </ul>
                <ul className="resumeDo">
                    <h5><TiTick/> Double check and include your contact information</h5>
                    <hr/>
                    <p>Your resume should list your name, address, email and phone number. This information should be placed at the top of the first page. Also, make sure this information is accurate. Otherwise, the employer won't be able to contact you.</p>
                </ul>
              </div>

              <div className="resume-dont">
                <h4 className="head">Resume Writing Dont's</h4>
                <br/>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't use an inappropriate email address </h5>
                    <hr/>
                    <p>Make sure your email is easy to read, easy to type, professional and non offensive. In general, your email address should be based on your name. Exclude any nicknames, numbers, or special chara</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/>Don't include unnecessary personal information</h5>
                    <hr/>
                    <p>It is best to leave out any personal details such as age, weight, height, marital status, religious preference, political views, or any other personal attributes that could be controversial. This will prevent any potential bias. Most importantly, never include your Social Insurance Number in your resume.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't include a picture of yourself </h5>
                    <hr/>
                    <p>Although in some countries it may be acceptable to include a photo, it is not the norm in Canada. It can actually lower your chances of obtaining a position and divert the whole focus of your resume. You want the employer to focus on your skills and experience, not what you look like.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't use too many bullets </h5>
                    <hr/>
                    <p>Make your resume easy to read by limiting each resume section or sub section to 5-7 bullet points. This will make it easier for the employer to scan your resume and identify your potential. Each bullet point should be used wisely by keeping the information relevant and concise.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't use personal pronouns </h5>
                    <hr/>
                    <p>Do not use "I," "my," or "me". Write your resume in the third person, as if it's being written by someone else.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't simply list job responsibilities </h5>
                    <hr/>
                    <p>Your job duties will be obvious from your job title. Instead, highlight your achievements by putting a personal spin on your job duties and providing specific examples.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't make general statements </h5>
                    <hr/>
                    <p>Steer clear from vague statements that don't highlight your actual contribution. Unclear statements such as, "Responsible for improving efficiencies and making cost savings", does not provide any information to an employer. Personalize your experience!</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Use simple words and action verbs</h5>
                    <hr/>
                    <p>The person reading your resume might not always be the employer. Resumes can be reviewed by recruiters or Human Resources specialists who may not be familiar with your specific field. Use simple and plain language, but also persuasive verbs such as handled, managed, led, developed, increased, accomplished, leveraged, etc.</p>
                </ul>
                <ul className="resumeDont">
                    <h5><RxCrossCircled/> Don't include reasons for leaving previous jobs</h5>
                    <hr/>
                    <p>The main purpose of your resume is to promote you, your skills, experience and achievements. It should be entirely positive, and therefore should not include reasons for leaving as it does not add any value to you as a candidate.</p>
                </ul>
              </div>
            </div>
      </div>

      <div className="covertip">
              <div className="cover-head">
                <h2>Cover Letter Tips</h2>
              </div>
                <h4 className="head">Writing a Cover Letter That Will Stand Out</h4>
                <br/>
                <ul className="cover-point">
                  <p> <strong>Do your research first.</strong> Before you start writing, find out more about the company and the specific job you want. Of course, you should carefully read the job description, but also peruse the company’s website, its executives’ Twitter feeds, and employee profiles on LinkedIn. This research will help you customize your cover letter, since you shouldn’t send a generic one. It’ll also help you decide on the right tone. “Think about the culture of the organization you’re applying to,” advises Glickman. “If it’s a creative agency, like a design shop, you might take more risks, but if it’s a more conservative organization, like a bank, you may hold back.”</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Focus it on the future.</strong> While your résumé is meant to be a look back at your experience and where you’ve been, the cover letter should focus on the future and what you want to do, says Glickman. “It can be helpful to think of it as the bridge between the past and the future that explains what you hope to do next and why.” Because of the pandemic there is less of an expectation that you’ll be applying for a job that you’ve done before. “There are millions of people who are making career changes — voluntarily or involuntarily — and need to pivot and rethink how their skill set relates to a different role or industry,” says Glickman. You can use your cover letter to explain the shift you’re making, perhaps from hospitality to marketing, for example. Think of it as an opportunity to sell your transferrable skills.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Open Strong</strong> “People typically write themselves into the letter with ‘I’m applying for X job that I saw in Y place.’ That’s a waste,” says Lees. Instead, lead with a strong opening sentence. “Start with the punch line — why this job is exciting to you and what you bring to the table,” says Glickman. For example, you might write, “I’m an environmental fundraising professional with more than 15 years of experience looking for an opportunity to apply my skills in new ways, and I’d love to bring my expertise and enthusiasm to your growing development team.” Then you can include a sentence or two about your background and your relevant experience, but don’t rehash your résumé.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Do your research first.</strong> Before you start writing, find out more about the company and the specific job you want. Of course, you should carefully read the job description, but also peruse the company’s website, its executives’ Twitter feeds, and employee profiles on LinkedIn. This research will help you customize your cover letter, since you shouldn’t send a generic one. It’ll also help you decide on the right tone. “Think about the culture of the organization you’re applying to,” advises Glickman. “If it’s a creative agency, like a design shop, you might take more risks, but if it’s a more conservative organization, like a bank, you may hold back.”</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Emphasize your personal value.</strong> Hiring managers are looking for people who can help them solve problems. Drawing on the research you did earlier, show that you know what the company does and some of the challenges it faces. These don’t need to be specific but you might mention how the industry has been affected by the pandemic. For example, you might write, “A lot of health care companies are overwhelmed with the need to provide high-quality care while protecting the health and safety of their staff.” Then talk about how your experience has equipped you to meet those needs; perhaps explain how you solved a similar problem in the past or share a relevant accomplishment. You want to provide evidence of the things that set you apart.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Convey enthusiasm.</strong> “When you don’t get hired, it’s usually not because of a lack of skills,” says Glickman. “It’s because people didn’t believe your story, that you wanted the job, or that you knew what you were getting into.” Hiring managers are going to go with the candidate who has made it seem like this is their dream job. So make it clear why you want the position. “Enthusiasm conveys personality,” Lees adds. He suggests writing something like “I’d love to work for your company. Who wouldn’t? You’re the industry leader, setting standards that others only follow.” Don’t bother applying if you’re not excited about some aspect of the company or role.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Watch the tone.</strong>At the same time, don’t go overboard with the flattery or say anything you don’t mean. Authenticity is crucial. “Even if you’ve been out of work for months, and would take any job at this point, you want to avoid sounding desperate,” says Lees. You don’t want your tone to undermine your message, so be professional and mature. A good rule of thumb is to put yourself in the shoes of the hiring manager and think about “the kind of language that the hiring manager would use with one of the company’s customers.” Of course, it can be hard to discern your own tone in writing, so you may need to ask someone to review a draft (which is always a good idea anyway — see advice below). Lees says that he often cuts outs “anything that sounds like desperation” when he’s reviewing letters for clients.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Keep it short.</strong>Much of the advice out there says to keep it under a page. But both Glickman and Lees say even shorter is better. “Most cover letters I see are too long,” says Lees. “It should be brief enough that someone can read it at a glance.” You do have to cover a lot of ground — but you should do it succinctly. This is where asking a friend, former colleague, or mentor to review your letter can be helpful. Ask them to read through it and point out places where you can cut.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>Get feedback.</strong>In fact, it’s a great idea to share your cover letter with a few people, says Lees. Rather than sending it off and asking, “What do you think?” be specific about the kind of feedback you want. In particular, request two things. First, ask your friend if it’s clear what your main point is. What’s the story you’re telling? Are they able to summarize it? Second, ask them what’s wrong with the letter. “Other people are more attuned to desperation, overselling, over-modesty, and underselling,” says Lees, and they should be able to point out places where the tone is off.</p>
                </ul>
                <ul className="cover-point">
                  <p> <strong>When you can’t submit a cover letter.</strong>Many companies now use online application systems that don’t allow for a cover letter. You may be able to figure out how to include one in the same document as your résumé, but that’s not a guarantee, especially because some systems only allow for data to be entered into specific boxes. In these cases, use the format you’re given to demonstrate your ability to do the job and your enthusiasm for the role. If possible, you may try to find someone to whom you can send a brief follow-up email highlighting a few key points about your application.</p>
                </ul>
                <br/>
                <ul className="cover-point">
                  <h4>Principles to Remember</h4>
                  <br/>
                  <h5>Do :</h5>
                  <br/>
                  <li>
                  Have a strong opening statement that makes clear why you want the job and what you bring to the table.
                  </li>
                  <li>
                  Be succinct — a hiring manager should be able to read your letter at a glance.
                  </li>
                  <li>
                  Share an accomplishment that shows you can address the challenges the employer is facing.
                  </li>
                  <br/>
                  <h5>Don't :</h5>
                  <br/>
                  <li>
                  Try to be funny — too often it falls flat.
                  </li>
                  <li>
                  Send a generic cover letter — customize each one for the specific job.
                  </li>
                  <li>
                  Go overboard with flattery — be professional and mature.
                  </li>
                </ul>

        </div>

        <div className="popular-tools">
          <div className="tool-head">
          <h4>Popular tools where you can find connection</h4>
          </div>
          <hr/>
          <div className="tool-cards">
            <div className="tool-card">
              <Link to ={{pathname:"https://linkedin.com/"}} target="_blank">
              <AiFillLinkedin className='tool_icon' />
              </Link>
            </div>
            <div className="tool-card">
            <Link to ={{pathname:"https://slack.com/"}} target="_blank">
              <FaSlack className='tool_icon' />
              </Link>
            </div>
            <div className="tool-card">
            <Link to ={{pathname:"https://twitter.com/"}} target="_blank">
              <AiOutlineTwitter className='tool_icon' />
              </Link>
            </div>
            <div className="tool-card">
            <Link to ={{pathname:"https://facebook.com/"}} target="_blank">
              <FaFacebook className='tool_icon' />
            </Link>
            </div>
            <div className="tool-card">
            <Link to ={{pathname:"https://instagram.com/"}} target="_blank">
              <AiFillInstagram className='tool_icon' />
              </Link>
            </div>
          </div>
          <br/>
          <hr/>
          
        </div>
      </div>
      {<Footer/>}
    </div>
  )
}

export default Career