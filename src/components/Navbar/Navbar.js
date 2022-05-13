import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import BUBT_Logo from "../../images/bubt.png";

const Navbar = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-info text-white static-top navbarText">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <a
            class="navbar-brand ml-3"
            href="https://www.bubt.edu.bd/"
            target="_blink"
          >
            <img src={BUBT_Logo} width="50" height="50" alt="" />
          </a>
          <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT CIVIL
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  VISION OF CIVIL
                </a>
                <a class="dropdown-item" href="#">
                  MISSION ON CIVIL
                </a>
                <a class="dropdown-item" href="#">
                  MESSAGE FROM THE CHAIRMAN
                </a>
                <a class="dropdown-item" href="#">
                  ACHIVEMENT
                </a>
                <a class="dropdown-item" href="#">
                  WHY CIVIL AT BUBT
                </a>
              </div>
            </li>
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROGRAM
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  UNDERGRADUATE
                </a>
              </div>
            </li>
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admission
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  UNDERGRADUATE
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Tuition_Fees"
                  target="_blink"
                >
                  Tuition Fee
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Scholarships_Waiver"
                  target="_blink"
                >
                  Scholarships & Waiver
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Requirements_Procedures"
                  target="blank"
                >
                  Admission Requirements
                </a>

                <a
                  class="dropdown-item"
                  href="https://admission.bubt.edu.bd/"
                  target="blank"
                >
                  Apply Online
                </a>
              </div>
            </li>

            {/* People */}
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                People
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Faculty Members
                </a>
                <a class="dropdown-item" href="#">
                  Lab Assistants
                </a>
                <a class="dropdown-item" href="#">
                  Administrative Staffs
                </a>
              </div>
            </li>
            {/* Students */}
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Students
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Class Routine
                </a>
                <a class="dropdown-item" href="#">
                  Exam Routine
                </a>
                <a class="dropdown-item" href="#">
                  Extracurricular Activities
                </a>
              </div>
            </li>

            {/* Resources & Facilities */}
            <li class="nav-item dropdown  active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources & Facilities
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Our Labs
                </a>
                <a class="dropdown-item" href="#">
                  Civil Club
                </a>
                <a class="dropdown-item" href="#">
                  IT Service For Students
                </a>
                <a class="dropdown-item" href="#">
                  Career Opportunities
                </a>
              </div>
            </li>

            {/* Alumni */}
            <li class="nav-item  active">
              <a class="nav-link" href="#">
                Alumni
              </a>
            </li>

            {/* Gallery */}
            <li class="nav-item  active">
              <a class="nav-link" href="/Gallery">
                Gallery
              </a>
            </li>

            {/* Contact */}
            <li class="nav-item  active">
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
