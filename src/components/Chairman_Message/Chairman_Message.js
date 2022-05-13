import React from "react";
import "./Chairman_Message.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ChairmanSir from "../../images/ChairmanSir.jpg";

const Chairman_Message = () => {
  return (
    <div className="">
      <Header />
      <div className="Chairman-message-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="Chairman-message-area">
                <div className="Message-title">
                  <h1>
                    Message from <span>The Chairman:</span>
                  </h1>
                </div>
                <div className="Message-body">
                  <p>
                    I am very much excited to welcome you to our flourishing
                    Department of Civil Engineering of Bangladesh University of
                    Business and Technology (BUBT). BUBT is one of the top
                    ranking universities in Bangladesh, established in 2003
                    under private university act 1992 approved by the Ministry
                    of Education. The university has academic collaboration and
                    credit transfer facilities with a number of foreign
                    Universities. BUBT is a member of the Association of
                    Commonwealth Universities, a member of the Association of
                    International Universities and also a member of the
                    Association of Management Development Institution in South
                    Asia.
                  </p>
                  <p>
                    It will be our pride to explore an outstanding education
                    world in the Department of Civil Engineering. Right from the
                    grand opening, it is our endeavor to make our department a
                    preferred destination for students who want to get to the
                    top of this field. We aspire to mold our students into
                    globally competent and well-shaped Civil Engineers who can
                    meet the challenges of technological advancement. All
                    efforts are also being made to inculcate social values and
                    professional ethics in our students to face the current as
                    well as future global standards.
                  </p>
                  <p>
                    We are targeted to establish a well-qualified and competent
                    faculty with well-equipped laboratories and committed to
                    provide an excellent teaching methodology for nurturing the
                    students into excellent engineers as well as good human
                    beings.
                  </p>
                  <p>
                    Currently, Bangladesh government promotes a number of
                    infrastructure projects like atomic energy power plant,
                    elevated expressways, flyovers, Metrorail, subway, bus rapid
                    transits, airports, expansion of railway services, deep-sea
                    port, barrage and so many to build a strong socio-economic
                    profile within the country. All such projects will require
                    huge workforce including civil engineers. Moreover, East
                    Asian countries like China, Hong Kong, Japan, South Korea,
                    and Taiwan, Middle-East countries like Turkey, Syria,
                    Lebanon, Jordan, Iraq, Iran, Saudi Arabia, United Arab
                    Emirates, Qatar, Bahrain, Kuwait, Egypt and Libya, Southeast
                    Asian countries like Indonesia, Malaysia, Singapore,
                    Thailand and Vietnam, North American countries like USA,
                    Canada, Mexico, Cuba and Brazil as well as European
                    countries like New Zealand, Switzerland, Germany, England,
                    Italy, French, Sweden, Norway, Finland, Switzerland and
                    Luxembourg are still having demand for the foreign civil
                    engineers. So, our graduates will enjoy a lot of
                    opportunities to build bright career in Bangladesh and many
                    countries of the rest of the world as well.
                  </p>
                  <p>
                    Eventually, I would like to invite you to browse through
                    BUBT website and feel free to contact me or the other
                    faculties of the department with any queries or additional
                    information that you may desire.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="Chairman-photo-area">
                <div className="Chairman-photo">
                  <img height="300px" width="300px" src={ChairmanSir} 
                  alt="" />
                </div>
                <div className="Chairman-title">
                  <h3>Prof. Dr. Ali Ahmed</h3>
                  <h5>Professor & Chairman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chairman_Message;
