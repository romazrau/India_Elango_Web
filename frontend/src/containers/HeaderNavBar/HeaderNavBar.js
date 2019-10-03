import React from "react";
import { Navbar, Nav,NavDropdown ,Form ,FormControl,Button } from "react-bootstrap"; //, NavDropdown
import DropdownButton from 'react-bootstrap/DropdownButton'
import styles from "./HeaderNavBar.module.css";
import { NavLink,Link, Switch, Route } from 'react-router-dom'

class HeaderNavBar extends React.Component {
  render() {
    return (
    <div>
      <Navbar CollapseOnSelect="true" style={{backgroundColor:"rgb(255,235,132)"}} variant="light" expand="lg">
        <Navbar.Brand href="#home">Elango & Kuthambakkam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <div className={styles.dropdown}>
              <Link to="/About">
                <button className="btn btn-outline-success">
                  About
                </button>
              </Link>
              <div className={styles.dropdown_content}>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <Link to="/Introduction">
                <button className="btn btn-outline-success">
                  Introduction
                </button>
              </Link>
              <div className={styles.dropdown_content}>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <Link to="/Academic">
                <button className="btn btn-outline-success">
                  Academic
                </button>
              </Link>
              <div className={styles.dropdown_content}>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <Link to="/SDGs">
                <button className="btn btn-outline-success">
                  SDGs
                </button>
              </Link>
              <div className={styles.dropdown_content}>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <div className={styles.dropdown}>
              <Link to="/ContactDonate">
                <button className="btn btn-outline-success">
                  Contact & Donate
                </button>
              </Link>
              <div className={styles.dropdown_content}>
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <Switch>
              <Route path="/posts" component={Posts} / >
              <Route path="/posts/:id?" component={PostRoute} / >
              <Route path="/authors" components={Authors} / >
              <Route path="/authors/:name?" components={AuthorRoute} / >
              <Redirect from="/Home" to="/" />
            </Switch>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}
export default HeaderNavBar;
