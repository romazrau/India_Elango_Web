import React from "react";
import { Navbar, Nav } from "react-bootstrap"; //, NavDropdown
import styles from "./HeaderNavBar.module.css";
import { Link } from "react-router-dom";

class HeaderNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "rgb(255,235,132)" }}
          variant="light"
          expand="lg"
        >
          <Navbar.Brand href="/home">
            <b>Elango & Kuthambakkam</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{justifyContent: "flex-end"}}>
              <div className={styles.dropdown}>
                <Link to="/About">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>About</b>
                  </button>
                </Link>
                <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#1">
                    Action
                  </a>
                  <a className="dropdown-item" href="#2">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#3">
                    Something else here
                  </a>
                </div>
              </div>

              <div className={styles.dropdown}>
                <Link to="/Introduction">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>Introduction</b>
                  </button>
                </Link>
                <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#4">
                    Action
                  </a>
                  <a className="dropdown-item" href="#5">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#6">
                    Something else here
                  </a>
                </div>
              </div>

              <div className={styles.dropdown}>
                <Link to="/Academic">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>Academic</b>
                  </button>
                </Link>
                <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#7">
                    Action
                  </a>
                  <a className="dropdown-item" href="#8">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#9">
                    Something else here
                  </a>
                </div>
              </div>

              <div className={styles.dropdown}>
                <Link to="/SDGs">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>SDGs</b>
                  </button>
                </Link>
                <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#10">
                    Action
                  </a>
                  <a className="dropdown-item" href="#11">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#12">
                    Something else here
                  </a>
                </div>
              </div>

              <div className={styles.dropdown}>
                <Link to="/Contact&Donate">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>Contact & Donate</b>
                  </button>
                </Link>
                <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#13">
                    Action
                  </a>
                  <a className="dropdown-item" href="#14">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#15">
                    Something else here
                  </a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default HeaderNavBar;
