import "./StyleSheets/global.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Trivia2 from "./pages/trivia2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    opened: false,
  };

  handleOpen = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Route path="/">
            <Navbar onClick={this.handleOpen} opened={this.state.opened} />
          </Route>

          <Switch>
            <Route path="/trivia" component={Trivia2} />

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
