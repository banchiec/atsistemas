import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteScreen from "./screens/SiteScreen/SiteScreen";
import SiteDetailsScreen from './screens/SiteDetailsScreen/SiteDetailsScreen'
import Header from "./components/Header/Header";
import "./App.css";
import RegisterSiteScreen from "./screens/RegisterSiteScreen/RegisterSiteScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SiteScreen} />
          <Route path="/site/register-site" exact component={RegisterSiteScreen} />
          <Route path="/site/update-site" exact component={RegisterSiteScreen} />
          <Route path="/site/:siteId" exact component={SiteDetailsScreen} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;