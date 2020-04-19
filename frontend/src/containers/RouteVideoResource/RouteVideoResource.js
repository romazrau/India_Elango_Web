import React from "react";
import { Card } from "react-bootstrap";

import styles from "./RouteVideoResource.module.css";

class RouteAcademic extends React.Component {
  render() {
    return (
      <div>
        <Card
          className="bg-dark text-white"
          style={{ borderWidth: "0", borderRadius: "0"}}
        >
          <Card.Img
            src={require("../../img/BlockAboutElango.jpg")}
            alt="Card image"
            style={{ opacity: "0.5"}}
          />
          <Card.ImgOverlay className={styles.wrapper}>
            <h2>Video Resource</h2>
            <h6>Coming soon</h6>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default RouteAcademic;
