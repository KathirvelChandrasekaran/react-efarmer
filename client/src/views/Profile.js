import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";

import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import SearchPlants from "../views/searchPlants";
const Profile = () => {
  const { loading, user } = useAuth0();
  const [searchPlants, setSearchPlants] = useState(false);

  if (loading || !user) {
    return <Loading />;
  }

  const showSearchPlants = () => {
    setSearchPlants(!searchPlants);
  };

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Container>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">eFarmer</h1>
            <p className="lead">
              Search the Plant for your Garden. And make the dishes from the
              fresh plants.
            </p>
          </Container>
        </Jumbotron>
      </Container>
      <Container>
        <Row>
          <Button outline color="primary" onClick={showSearchPlants}>
            Search Plants
          </Button>
        </Row>
      </Container>
      <div style={{margin: 20}}>{searchPlants ? <SearchPlants /> : null}</div>
    </Container>
  );
};

export default Profile;
