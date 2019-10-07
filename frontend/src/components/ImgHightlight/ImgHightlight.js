import React from "react";
import { Card } from "react-bootstrap"; //, NavDropdown

import styles from "./ImgHightlight.module.css";

export default ({ srcRequire, text }) => {
  return (
    <div style={{ marginTop: "5vh" }}>
      <Card
        className="bg-dark text-white"
        style={{ borderWidth: "0", borderRadius: "0"}}
      >
        <Card.Img
          src={srcRequire}
          alt="Card image"
          style={{ opacity: "0.5" ,maxHeight:"90%"}}
        />
        <Card.ImgOverlay className={styles.wrapper}>
          <p className={styles.wrapper_text}>{text}</p>
          <button className={styles.wrapper_button}></button>
          <img src={srcRequire} alt="" className={styles.wrapper_img} />
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};
