import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "../scss/style.scss";

import BodyText from "../components/BodyText/BodyText";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Lines from "./Lines";
import Share from "./Share";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div className="body-wrapper">
        <Lines />
        <BodyText />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/share" component={Share} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
