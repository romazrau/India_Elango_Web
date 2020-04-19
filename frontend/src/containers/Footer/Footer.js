import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component{
  render(){
    return(
      <footer className={styles.footer} id="footer">
        <div className={styles.copyright}>
          <img src={require("../../img/footer.svg")} alt="" className={styles.image}></img>
          <h2 className="mb-1 mt-0 text-white">Contact Us</h2>
          <p className="mb-1 text-white">Truth of Self-governance</p>
          <p className="mb-1 text-white fa fa-phone-square "> ：+71 9940682201</p>
          <p className="mb-0 text-white fa fa-envelope "> ：panchayatgovt@gmail.com</p>
          <ul className={styles.icons}>
            <li><a href="#1" title="Facebook" className="fab fa-facebook-square fa-2x"></a></li>
            <li><a href="#2" title="Email us" className="fa fa-envelope fa-2x"></a></li>
            <li><a href="#3" title="Youtube" className="fab fa-youtube fa-2x"></a></li>
            <li><a href="#4" title="Whatsapp" className="fab fa-whatsapp fa-2x"></a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
