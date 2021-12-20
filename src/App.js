import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Page/Home";
import Detail from "./Page/Detail";
import "./App.css";
import "./grid.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename="/clock-shop">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
