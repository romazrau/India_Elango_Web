import React from "react";
import styles from "./FullWidthVideo.module.css";

class FullWidthVideo extends React.Component{
  render(){
    return(
      <div className={styles.videoheader}>
        <div clasName={styles.FullscreenVideoWrap}>
          <video className={styles.video} src={require("../../video/cover.MOV")} autoplay="autoplay" loop="loop" muted="true"></video>
        </div>
        <div className={styles.headeroverlay}>
          <div className={styles.headercontent}>
            <h1><b>“ The warmth and glow of development should <br /> be felt by the common man and the poor. ”</b></h1>
            <h2 style={{color:"#FFEB84"}}>-- Elango Rangaswamy --</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default FullWidthVideo;
