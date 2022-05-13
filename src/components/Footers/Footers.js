import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faFacebook, faTwitter, faYoutube, faLinkedIn } from '@fortawesome/free-solid-svg-icons'
import "./Footers.css"

const Footers = () => {
    return (
        <div classNameName="main-container">
            <footer className="footer-area footer--light">
  <div className="footer-big">
    {/* <!-- start .container --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <div className="widget-about">
              <img src="CE1.png" alt="" className="img-fluid" />
              <p>Department of Civil Engineering</p>
              <ul className="contact-details">
                <li>
                  <span className="icon-earphones"></span> Call Us:
                  <a href="tel:344-755-111">344-755-111</a>
                </li>
                <li>
                  <span className="icon-envelope-open"></span>
                  <a href="mailto:support@aazztech.com">support@aazztech.com</a>
                </li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon="faFacebook"></FontAwesomeIcon></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon="faYoutube"></FontAwesomeIcon></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon="faTwitter"></FontAwesomeIcon></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon="faLinkedin"></FontAwesomeIcon></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon="faGooglePlus"></FontAwesomeIcon></a></li>
              </ul>
            </div>
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-md-4 --> */}
        <div className="col-md-2 col-sm-6 ">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title">STUDENT CORNER</h4>
              <ul>
                <li>
                  <a href="https://annex.bubt.edu.bd/" target="_blank">Student Portal</a>
                </li>
                <li>
                  <a href="#">Alumni</a>
                </li>
                <li>
                  <a href="https://convocation.bubt.edu.bd/" target="_blank">Convocation</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/Home/page_details/Semester_Policy/" target="_blank">Semester Policy</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/downloads/index/9091/" target="_blank">Download Center</a>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-md-3 --> */}

        <div className="col-md-2 col-sm-6 Add">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title">QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="https://www.bubt.edu.bd/Home/page_details/Admission_Notices/" target="_blank">Admission</a>
                  
                </li>
                <li>
                  <a href="#" target="_blank">Registration</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/Home/page_details/Requirements_Procedures/" target="_blank">Requirements & Procedures</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/newsletter/" target="_blank">Newsletter</a>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-lg-3 --> */}

        <div className="col-md-2 col-sm-6 Add" >
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title">CLUBS</h4>
              <ul>
                <li>
                  <a href="#">"BUBT IT Club</a>
                </li>
                <li>
                  <a href="#">CIVIL CLUB</a>
                </li>
                <li>
                  <a href="#">EEE CLUB</a>
                </li>
                <li>
                  <a href="#">Textile CLUB</a>
                </li>
                <li>
                  <a href="#">Business CLUB</a>
                </li>
                <li>
                  <a href="#">IEEE Club</a>
                </li>
                <li>
                  <a href="#">Sports Club</a>
                </li>
                <li>
                  <a href="#">Culture Club</a>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- Ends: .col-lg-3 --> */}
        <div className="col-md-2 col-sm-6 Add">
          <div className="footer-widget">
            <div className="footer-menu ">
              <h4 className="footer-widget-title " >ACADEMIC</h4>
              <ul>
                <li>
                  <a href="https://www.bubt.edu.bd/Home/all_notice/" target="_blank">Notice</a>
                </li>
                <li>
                  <a href="#" target="_blank">Library</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/home/results" target="_blank">Results</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/home/routines" target="_blank">className Routine</a>
                </li>
                <li>
                  <a href="https://www.bubt.edu.bd/home/routines" target="_blank">Exam Routine</a>
                </li>
               
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-lg-3 --> */}
      </div>
      {/* <!-- end /.row --> */}
    </div>
    {/* <!-- end /.container --> */}
  </div>
  {/* <!-- end /.footer-big --> */}

  <div className="mini-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright-text">
            <p>© Department of Civil Engineering</p>
          </div>

          {/* <div className="go_top">
            <span className="icon-arrow-up"></span>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footers;