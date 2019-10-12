import React from "react";
import styles from "./BlockTrustSG.module.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class BlockTrustSG extends React.Component{
  render(){
    return(
      <section className={styles.wrapperstyle1}>
          {/*2 Columns*/}

          <div className={styles.flex}>

            <div className={styles.innerleft}>
              <h3>Trust of Self-Governance</h3>
              <p>The Model of Local Self-Governance <br /> “Small , Beautiful, Self-Governing and Sustainable Village ”</p>
              <Link to="/Introduction">
                <Button variant="primary">Read more</Button>
              </Link>
            </div>

            <img  src={require("../../img/BlockTrustSG.jpg")} alt="" className={styles.innerright}/>

         </div>
      </section>
    );
  }
}
export default BlockTrustSG;
