import React, { Component } from "react";
import Form from "./../../components/Form";

import { Route } from "react-router-dom";
import TemplateSwitcher from "./../../components/TemplateSwitcher";

class Home extends Component {
  render() {
    return <TemplateSwitcher />;
  }
}

export default Home;
