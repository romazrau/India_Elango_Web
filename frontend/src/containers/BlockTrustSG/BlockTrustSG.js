import React from "react";
import styles from "./BlockTrustSG.module.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class BlockTrustSG extends React.Component{
  render(){
    return(
      <section classNmae={styles.wrapperstyle1}>
          {/*2 Columns*/}

          <div className={styles.flex}>

            <div className={styles.innerleft}>
              <h3>About Dr. Elango</h3>
              <p>“The warmth and glow of development should be felt <br /> by the common man and the poor”	---Dr. Elango</p>
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