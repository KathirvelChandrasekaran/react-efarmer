import React, { useState } from "react";
import { useFormik } from "formik";

import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import SearchPlants from "../views/searchPlants";
import ViewPlants from "../views/viewPlants";
import SearchRecipe from "../views/searchRecipe";
import axios from "axios";

const Profile = (props) => {
  const { loading, user } = useAuth0();
  const [searchRecipe, setSearchRecipe] = useState(false);
  const [searchPlants, setSearchPlants] = useState(false);
  const [viewPlants, setViewPlants] = useState(false);
  const [modal, setModal] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      also: "",
      alternateName: "",
      sowInstruction: "",
      spaceInstruction: "",
      harvestInstruction: "",
      compatiblePlants: "",
      avoidInstructions: "",
      culinaryHints: "",
      culinaryPreservation: "",
    },

    onSubmit: (userInputData) => {
      console.log(userInputData);
      axios
        .post("http://localhost:5000/api/insertPlant", userInputData)
        .then((res) => {
          console.log("success");

          props.history.push("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  if (loading || !user) {
    return <Loading />;
  }

  const showSearchPlants = () => {
    setSearchPlants(!searchPlants);
  };

  const showSearchRecipe = () => {
    setSearchRecipe(!searchRecipe);
  };

  const showviewPlants = () => {
    setViewPlants(!viewPlants);
  };

  const { buttonLabel, className } = props;

  const toggle = () => setModal(!modal);
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
        {/* <Col md>
          <h2>Verification Status</h2>
          {!user.email_verfied ? (
            <img
              style={{ height: 100 }}
              src="https://image.flaticon.com/icons/svg/2921/2921144.svg"
            ></img>
          ) : (
            <img
              style={{ height: 100 }}
              src="https://image.flaticon.com/icons/svg/2921/2921112.svg"
            />
          )}
        </Col> */}
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
          &nbsp;
          <Button outline color="primary" onClick={showSearchRecipe}>
            Search Recipies
          </Button>
          &nbsp;
          <div>
            <Button color="primary" onClick={toggle}>
              Contribute about plants
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                  <FormGroup>
                    <Label>Plant Name</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Plant Name"
                      name="name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Also known as</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Also known as"
                      name="also"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Alternate Name</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Also known as"
                      name="alternateName"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Sow Instructions</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Sow Instructions"
                      name="sowInstruction"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Space Instructions</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Space Instructions"
                      name="spaceInstruction"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Harvest Instructions</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Harvest Instructions"
                      name="harvestInstruction"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>CompatiblePlants</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="CompatiblePlants"
                      name="compatiblePlants"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Avoid Instructions</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Avoid Instructions"
                      name="avoidInstructions"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Culinary Hints</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Culinary Hints"
                      name="culinaryHints"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Culinary Preservation</Label>
                    <Input
                      type="text"
                      onChange={formik.handleChange}
                      placeholder="Culinary Preservation"
                      name="culinaryPreservation"
                    />
                  </FormGroup>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle} name="action">
                      Submit
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </Modal>
          </div>
          {/* <Button outline color="primary" onClick={showviewPlants}>
            View Plants
          </Button> */}
        </Row>
      </Container>
      <div style={{ margin: 20 }}>{searchPlants ? <SearchPlants /> : null}</div>
      <div style={{ margin: 20 }}>{searchRecipe ? <SearchRecipe /> : null}</div>
      <div style={{ margin: 20 }}>{viewPlants ? <ViewPlants /> : null}</div>
    </Container>
  );
};

export default Profile;
