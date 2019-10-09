import React from "react";
import { Image, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

export default ({ srcRequire, title, post, titleList }) => {
  return (
    <div>
      <Image src={srcRequire} fluid style={{ width: "100%" }} />
      <Card
        style={{
          backgroundColor: "rgb(245, 245, 245)",
          borderWidth: "0",
          borderRadius: "0"
        }}
      >
        <Card.Body>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_list}>
              {titleList.map(e => (
                <div key={e.title}>
                  <NavLink
                    to={"/about/" + e.title}
                    activeStyle={{ color: "#4CAF50" }}
                    className={styles.navlink}
                  >
                    <h6>
                      <b>{e.title}</b>
                    </h6>
                  </NavLink>
                  {e.subtitleList.length
                    ? e.subtitleList.map(e => <p key={e.id}>&nbsp;{e.subtitle}</p>)
                    : ""}
                </div>
              ))}
            </div>
            <div className={styles.wrapper_post}>
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post }}></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
