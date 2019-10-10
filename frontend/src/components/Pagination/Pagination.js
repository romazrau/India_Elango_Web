import React from "react";
import { Image, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

export default ({ srcRequire, title, post, titleList, route }) => {
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
        <Card.Body style={{padding:"0 0 0 0"}}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_list}>
              {titleList.map(e => (
                <div key={e.title} className={styles.link_div}>
                  <NavLink
                    to={"/"+route+"/" + e.title}
                    activeStyle={{ color: "#4CAF50" }}
                    className={styles.navlink}
                  >
                    <b>{e.title}</b>
                  </NavLink>
                  {e.subtitleList.length
                    ? e.subtitleList.map(ele => (
                        <p key={ele.id} style={{marginBottom:"0.1vh"}}>
                          <a
                            className={styles.link_p}
                            href={"/"+route+"/" + e.title + "#" + ele.id}
                          >
                            {ele.subtitle}
                          </a>
                        </p>
                      ))
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
