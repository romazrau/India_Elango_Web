import React from "react";
import styles from "./BlockVideoResouce.module.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class BlockVideoResouce extends React.Component{
  render(){
    return(
      <section className={styles.wrapperstyle1}>
          {/*2 Columns*/}

          <div className={styles.flex}>

            <img  src={require("../../img/BlockSDGsTracker.jpg")} alt="" className={styles.innerleft}/>

            <div className={styles.innerright}>
              <h3>Video Resouce</h3>
              <p>“It can promote social and economical development on the right way” </p>
              <Link to="/SDGs">
                <Button variant="primary">Read more</Button>
              </Link>
            </div>

         </div>
      </section>
    );
  }
}
export default BlockVideoResouce;
