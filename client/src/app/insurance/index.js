import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Transition, PageTransition } from "../components";

import { Route } from "react-router-dom";
import { Car, Bike } from "./components";

export default class Insurance extends Component {
  render() {
    return (
      <PageTransition animation="t-fade-in">
        <div
          style={{ height: "100vh", background: "wheat", overflow: "hidden" }}
        >
          <Route path="/compare/car" component={Car} />
          <Route path="/compare/bike" component={Bike} />
        </div>
      </PageTransition>
    );
  }
}
