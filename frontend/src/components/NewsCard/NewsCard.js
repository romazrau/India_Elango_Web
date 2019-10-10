import React from 'react';
import {
    Card
} from "react-bootstrap"; //, NavDropdown

export default ({srcRequire , text,onclick})=>{
    return (
        <Card href="#52" onClick={onclick}>
          <Card.Img variant="top" src={srcRequire} />
          <Card.Body style={{ backgroundColor:"#f2f2f2"}}>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ height:"1vh" , padding:"0 0 0 0" ,backgroundColor:"rgb(255, 189, 6)"}}>
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </Card.Footer>
        </Card>
    )
}

