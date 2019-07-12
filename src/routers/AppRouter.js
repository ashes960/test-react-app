import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactUsPage from "../components/ContactUsPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className="header">
        <div className="container">
          <Header />
        </div>
      </div>

      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={ContactUsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
