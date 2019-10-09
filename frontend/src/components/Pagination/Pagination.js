import React from "react";
import { Image, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

export default ({ srcRequire, title, post, postList }) => {
  return (
    <div >
      <Image src={srcRequire} fluid style={{ width: "100%" }} />
      <Card style={{backgroundColor:"rgb(245, 245, 245)",borderWidth: "0", borderRadius: "0"}}>
        <Card.Body>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_list}>
              {postList.map(e => (
                <NavLink
                  key={e}
                  to={"/about/" + e}
                  activeStyle={{ color: "#4CAF50" }}
                  className={styles.navlink}
                >
                  <h6><b>{e}</b></h6>
                </NavLink>
              ))}
            </div>
            <div className={styles.wrapper_post}>
              <h3>{title}</h3>
              <div>{post}</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
