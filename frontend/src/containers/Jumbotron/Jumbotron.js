import React from "react";
import styles from './Jumbotron.module.css'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class Jumbo extends React.Component {
  render() {
    return (
        <div className={styles.jumbotron}>
          <div className={styles.container}>
             <div className={styles.text}>
                <h2 className={styles.title}>Video Resouce</h2>
                <p className="lead">This is a video channel to share the concepts of 'Trust for Village  Self Governance', 'Sustainable Rural Development', and 'Spirit of Elango'.</p>
             </div>
            <div className={styles.video}>
                <iframe title='https://www.youtube.com/embed/lrTGtl-kd4k' width="100%" height="100%" src="https://www.youtube.com/embed/lrTGtl-kd4k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Link to="/Academic">
              <Button style={{margin:"5vh"}} variant="warning">Read more</Button>
            </Link>
          </div>
        </div>
    );
  }
}
export default Jumbo;
