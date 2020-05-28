import "./StyleSheets/global.scss";
import Home from "./pages/Home";
import "./StyleSheets/App.scss";
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
          <Navbar onClick={this.handleOpen} opened={this.state.opened} />
          <Switch>
            
             <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/trivia">
              <Trivia2 />
            </Route>
            
            
           
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
