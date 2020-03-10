import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AppBody from "./screens/AppBody";

class App extends Component {
  render() {
    return (
      <div className = "container">
        <AppBody />
      </div>
    );
  }
}

export default connect()(App);