import React, { Component } from "react";
import Form from "./../../components/Form";

import { Route } from "react-router-dom";
import TemplateSwitcher from "./../../components/TemplateSwitcher";
import {
  Row,
  Col,
} from "reactstrap";
class Home extends Component {
  render() {

    return (
      <Row className="mt-5 justify-content-center">
        <Col lg="6">
          <TemplateSwitcher />
        </Col>
      </Row>
    )
  }
}

export default Home;
