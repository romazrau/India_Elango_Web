import React from "react";
import { Navbar, Nav } from "react-bootstrap"; //, NavDropdown
import styles from "./HeaderNavBar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};
class ConnectedHeaderNavBar extends React.Component {
  render() {
    const NavlinkArticlesdisplay = Object.keys(this.props.articles).map(
      e=>(
        <div className={styles.dropdown} key={e}>
          <Link to={"/"+e}>
            <button
              className="btn btn-outline-success"
              style={{ borderColor: "rgba(0, 0, 0,0)" }}
            >
              <b>{e}</b>
            </button>
          </Link>
          <div className={styles.dropdown_content}>
          {this.props.articles[e].map(ele => (
            <a className="dropdown-item" href={"/"+e+"/"+ele.title} key={ele.title}>
              {ele.title}
            </a>
          ))}
          </div>
        </div>
      )
    )

    return (
      <div>
        <Navbar
          style={{ backgroundColor: "rgb(255,235,132)",width:"100vw"}}
          variant="light"
          expand="lg"
        >
          <Navbar.Brand href="/home">
            <b>Elango & Kuthambakkam</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ justifyContent: "flex-end" }}>

              {NavlinkArticlesdisplay}

              <div className={styles.dropdown}>
                <Link to="/Academic">
                  <button
                    className="btn btn-outline-success"
                    style={{ borderColor: "rgba(0, 0, 0,0)" }}
                  >
                    <b>Video Resource</b>
                  </button>
                </Link>
                {/* <div className={styles.dropdown_content}>
                  <a className="dropdown-item" href="#7">
                    Action
                  </a>
                  <a className="dropdown-item" href="#8">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#9">
                    Something else here
                  </a>
                </div> */}
              </div>

              {/* <div className={styles.dropdown}>
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
              </div> */}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const HeaderNavBar = connect(mapStateToProps)(ConnectedHeaderNavBar); //
export default HeaderNavBar;
