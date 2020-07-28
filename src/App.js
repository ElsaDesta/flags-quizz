import "./StyleSheets/global.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import TriviaScreen from "./pages/TriviaScreen";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" data-test="app">
          <Route path="/">
            <Navbar  />
          </Route>
          <Switch>
            <Route path="/triviascreen">
              <TriviaScreen />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
