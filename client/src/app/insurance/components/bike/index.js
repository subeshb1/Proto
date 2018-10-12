import React, { Component } from "react";
import { PageTransition } from "../../../components";

export default class Bike extends Component {
  render() {
    return (
      <PageTransition>
        <input type="text" />
      </PageTransition>
    );
  }
}
