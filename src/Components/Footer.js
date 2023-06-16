import React from "react"
import { Link } from "react-router-dom";
import './Footer.css'
// import Home from "../pages/Home"
// import Achiever from "../pages/Achiever"
// import Contact from "../pages/Contact"
// import Involved from "../pages/Involved"
// import More from "../pages/More"
// import Reading from "../pages/Reading"
// import Overview from "../pages/Overview"
// import About from "../pages/About"
// import News from "../pages/News"
// import TopAlumni from "../pages/TopAlumni"
// import Notable from "../pages/Notable"
// import Wiser from "../pages/Wiser"
// import Award from "../pages/Award"
// import Daily from "../pages/Daily"
// import Gallery from "../pages/Gallery"
// import Video from "../pages/Video"
// import FAQ from "../pages/FAQ"
// import Career from "../pages/Career"
// import Layout from "../Components/Layout"

const Footer = () => <footer className="foot bg-dark text-white">
    <hr/>
        <div className="fgrid-container">
            <div className="item 1">
                <h5 className="text-uppercase">Home</h5>
                <ul className="list-unstyled">
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/">Latest news and Announcement</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
            <div className="item 2">
                <h5 className="text-uppercase">Alumni Achievers</h5>
                <ul className="list-unstyled">
                    <li><Link to="/wiser">Top Alumni in the Lime Light</Link></li>
                    <li><Link to="/notable">Notable Alumni</Link></li>
                    <li><Link to="/wiser">WISER</Link></li>
                    <li><Link to="/award">Distinguished Alumni Award Winner</Link></li>
                </ul>
            </div>
            <div className="item 3">
                <h5 className="text align-left">Reading and Resources</h5>
                <ul className="list-unstyled">
                    <li><Link to="/daily">Events</Link></li>
                    <li><Link to="/career">Career Connecction</Link></li>
                </ul>
            </div>

            <div className="item 4">
                <h5 className="text-uppercase">More</h5>
                <ul className="list-unstyled">
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/video">Video</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
        </div>
    <hr/>
    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <Link to="/"> Alumni Association </Link>
    </div>

</footer>

export default Footer