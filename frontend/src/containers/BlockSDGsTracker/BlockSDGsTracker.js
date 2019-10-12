import React from "react";
import styles from "./BlockSDGsTracker.module.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class BlockSDGsTracker extends React.Component{
  render(){
    return(
      <section className={styles.wrapperstyle1}>
          {/*2 Columns*/}

          <div className={styles.flex}>
            
            <div className={styles.innerleft}>
              <h3>SDGs Tracker</h3>
              <p>“It can promote social and economical development on the right way” </p>
              <Link to="/SDGs">
                <Button variant="primary">Read more</Button>
              </Link>
            </div>

            <img  src={require("../../img/BlockSDGsTracker.jpg")} alt="" className={styles.innerright}/>

         </div>
      </section>
    );
  }
}
export default BlockSDGsTracker;
