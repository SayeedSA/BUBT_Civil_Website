import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Civil - BUBT";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w2nhg64",
        "ContactWithImriaz",
        e.target,
        "user_kb80kTBPl5yCGj7ZzRSPP"
      )
      .then(
        (result) => {
          alert(
            "Your Message has been successfully sent. To Do List App will contact you Soon."
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <div className="avoid-margin">
        <h1>
          <span className="company-title">Department of Civil Engineering</span>
        </h1>
        <p>Bangladesh University of Business and Technology</p>

        <h2 style={{ marginTop: "60px" }}>Contact Us</h2>
        <div>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto mb-3">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
