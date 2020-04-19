import React from "react";
import styles from "./BlockAboutElango.module.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class BlockAboutElango extends React.Component{
  render(){
    return(
      <section className={styles.wrapperstyle1}>
          {/*2 Columns*/}

          <div className={styles.flex}>

            <img  src={require("../../img/BlockAboutElango.jpg")} alt="" className={styles.innerleft}/>

            <div className={styles.innerright}>
              <h3 style={{paddingBottom:"0.5rem",fontWeight:"bold"}}>About Dr. Elango</h3>
              <p>“The warmth and glow of development should be felt by the common man and the poor”	---Dr. Elango <br/>
The Story of a Dalit Leader who makes his village sustainable try to fight for poor and make the village thrive. </p>
              <Link to="/About">
                <Button variant="primary">Read more</Button>
              </Link>
            </div>

         </div>
      </section>
    );
  }
}
export default BlockAboutElango;
