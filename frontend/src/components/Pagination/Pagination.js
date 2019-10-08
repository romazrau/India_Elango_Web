import React from "react";
import { Image } from "react-bootstrap"; 
import { NavLink } from "react-router-dom";

import styles from "./Pagination.module.css";

export default ({ srcRequire, title, post, postList }) => {
  return (
    <div>
      <Image src={srcRequire} fluid style={{ width: "100%" }} />
      <div className={styles.wrapper}>
        <div className={styles.wrapper_list}>
          {postList.map(e => (
            <NavLink to={"/about/"+e} activeStyle={{ color: "#fa923f" }} ><h6>{e}</h6></NavLink>
          ))}
        </div>
        <div className={styles.wrapper_post}>
          <h3>{title}</h3>
          <p>{post}</p>
        </div>
      </div>
    </div>
  );
};
