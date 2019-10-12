import React from 'react';
import {
    Card
} from "react-bootstrap"; //, NavDropdown

import styles from "./NewsCard.module.css";

export default ({srcRequire , text,onclick,title,date})=>{
    return (
        <Card href="#52" onClick={onclick} className={styles.cardWrapper} style={{borderBottomWidth:'0'}}>
          <Card.Img variant="top" src={srcRequire} />
          <Card.Body className={styles.cardBody}>
            <Card.Title style={{marginBottom:"0",fontSize:"1em"}}>
              <b>{title}</b>
              <hr style={{margin:"8px 0"}}/>
            </Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
          <Card.Footer className={styles.cardFoooter} style={{ height:"1.5em" , padding:"0 0 0 0" ,borderWidth:"0",backgroundColor:"#f2f2f2"}}>
            {date}
          </Card.Footer>
          <Card.Footer style={{ height:"1vh" , padding:"0 0 0 0" ,backgroundColor:"rgb(255, 189, 6)"}}>
          </Card.Footer>
        </Card>
    )
}

