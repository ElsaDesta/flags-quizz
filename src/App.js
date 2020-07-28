import "./StyleSheets/global.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Trivia2 from "./pages/trivia2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import TriviaScreen from "./pages/TriviaScreen";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Route path="/">
            <Navbar onClick={this.handleOpen} opened={this.state.opened} />
          </Route>

          <Switch>
            <Route path="/trivia" component={Trivia2} />
            <Route path="/triviascreen" component={TriviaScreen} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
