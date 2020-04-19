import React from "react";
import styles from "./FullWidthVideo.module.css";

class FullWidthVideo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render(){
    return(
      <div className={styles.videoheader}>
        <div className={styles.FullscreenVideoWrap}>

          <video className={styles.video} src={require("../../video/cover.mp4")} autoPlay="autoplay" loop="loop" muted={this.state.isToggleOn}></video>

        </div>
        <div className={styles.headeroverlay}>
          <div className={styles.headercontent}>
            <h1><b>“ The warmth and glow of development should <br /> be felt by the common man and the poor. ”</b></h1>
            <h2 style={{color:"#FFEB84"}}>-- Elango Rangaswamy --</h2>
          </div>
          <button onClick={this.handleClick} className="btn btn-outline-warning btn-sm" style={{margin:"20vh 2vw 2vh 2vw"}}>
            {this.state.isToggleOn ? 'SoundON' : 'SoundOFF'}
          </button>
        </div>
      </div>
    );
  }
}
export default FullWidthVideo;
