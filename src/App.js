import React, { Component } from "react";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home";
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route  exact path="/" component={() => <Home />} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
        <ToastContainer
          style={{ fontSize: "1.5rem", marginLeft: "1.2rem", zIndex:"100000" }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
