import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BUBT_Logo from "../../images/bubt.png";
import CE_BUBT_Logo from "../../images/CE1.png";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            {" "}
            <img
              src={CE_BUBT_Logo}
              width="40"
              height="40"
              className="d-inline-block align-top "
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              {/* ABOUT CIVIL */}
              <NavDropdown title="ABOUT CIVIL" id="collasible-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/Vision">
                  VISION
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/Mission">
                  MISSION
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/ChairmanMessage">
                  MESSAGE FROM THE CHAIRMAN
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/Achievements">
                  ACHIEVEMENTS
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/WhyCivilAtBUBT">
                  WHY CIVIL AT BUBT
                </NavDropdown.Item>
              </NavDropdown>
              {/* PROGRAM */}
              <NavDropdown title="PROGRAM" id="collasible-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/Undergraduate">
                  Undergraduate
                </NavDropdown.Item>
              </NavDropdown>

              {/* Admission */}
              <NavDropdown title="Admission" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item as={HashLink} to="/gallery">
                  Tuition Fee
                </NavDropdown.Item> */}
                  <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Tuition_Fees"
                  target="_blank"
                >
                  Tution Fee
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Scholarships_Waiver"
                  target="_blank"
                >
                  Scolarship & Waiver
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.bubt.edu.bd/Home/page_details/Requirements_Procedures"
                  target="_blank"
                >
                  Admission Requirements
                </a>
                {/* <NavDropdown.Item as={HashLink} to="/Chairman-Message">
                  Scholarships & Waiver
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item as={HashLink} to="/Chairman-Message">
                  Admission Requirements
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item> */}
                <a
                  class="dropdown-item"
                  href="https://admission.bubt.edu.bd/"
                  target="_blank"
                >
                  Apply Online
                </a>
                {/* </NavDropdown.Item> */}
              </NavDropdown>

              {/* PEOPLE */}
              <NavDropdown title="PEOPLE" id="collasible-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/FacultyMembers">
                  FACULTY MEMBERS
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/LabAssistants">
                  LAB ASSISTANTS
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/AdministrativeStaffs">
                  Administrative Staffs
                </NavDropdown.Item>
              </NavDropdown>

              {/* Resources & Facilities */}
              <NavDropdown
                title="Resources & Facilities"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={HashLink} to="/OurLabs">
                  Our Labs
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/CareerOpportunities">
                  Career Opportunities
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={HashLink} to="/CivilClub">
                Civil Club
              </Nav.Link>

        
              <Nav.Link as={HashLink} to="/Gallery">
                Gallery
              </Nav.Link>
              {/* <NavLink className="mx-1" to="/contact">
                <Button variant="outline-secondary">Contact</Button>
              </NavLink> */}
              <Nav.Link as={HashLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;