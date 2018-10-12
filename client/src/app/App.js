import React, { Component } from "react";
import "./App.css";
import { Home, Insurance } from "./pages";
import { Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route path="/" exact component={Home} />
        <Route path="/compare" component={Insurance} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    );
  }
}
