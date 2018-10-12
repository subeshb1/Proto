import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./app/App";

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => {
            return <App location={location} />;
          }}
        />
      </BrowserRouter>
    );
  }
}
