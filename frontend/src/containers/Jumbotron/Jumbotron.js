import React from "react";
import styles from './Jumbotron.module.css'
class Jumbo extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.jumbotron}>
           <div className="container for-about">
              <br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br>
              <h1 className="display-5">Truth of Self-Governance</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
           </div>
        </div>
      </div>
    );
  }
}
export default Jumbo;
