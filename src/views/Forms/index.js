import React, { Component } from "react";
import Form from "./../../components/Form";

import {
  Card,
  CardBody,
  Badge,
  Row,
  Col,
  Container,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { useParams } from "react-router-dom";
const Forms = () => {
  const { formId } = useParams();
  return (
    <Row className="mt-5 justify-content-center">
      <Col lg="6">
        <Form formId={formId} />
      </Col>
    </Row>
  );
};

export default Forms;
