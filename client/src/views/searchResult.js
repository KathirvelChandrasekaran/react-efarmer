import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, Row, Col } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
const SearchResult = ({
  name,
  also,
  sowInstructions,
  spaceInstructions,
  avoidInstructions,
  compatiblePlants,
  culinaryHints,
  culinaryPreservation,
}) => {
  return (
    <Row style={{margin: 30, padding: 50}}>
      <Col sm="6">
        <Card body>
          <CardTitle>
            {name} aka {also}
          </CardTitle>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>Sow Instructions</ListGroupItemHeading>
              <ListGroupItemText>{sowInstructions}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Space Instructions</ListGroupItemHeading>
              <ListGroupItemText>{spaceInstructions}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Avoid Instructions</ListGroupItemHeading>
              <ListGroupItemText>{avoidInstructions}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Compatible Plants</ListGroupItemHeading>
              <ListGroupItemText>{compatiblePlants}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Culinary Hints</ListGroupItemHeading>
              <ListGroupItemText>{culinaryHints}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Culinary Preservation</ListGroupItemHeading>
              <ListGroupItemText>{culinaryPreservation}</ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default SearchResult;
