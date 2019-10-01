import React from 'react';
import {
    Card
} from "react-bootstrap"; //, NavDropdown

export default ({srcRequire , text})=>{
    return (
        <Card>
          <Card.Img variant="top" src={srcRequire} />
          <Card.Body>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    )
}

