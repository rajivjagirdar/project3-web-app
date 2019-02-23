import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import knight from "./images/knightrun.png"


function App() {
  return (
    <Router>
    <div className="image">
      <Nav />
      <Switch>
        <Route exact path="/" component={Leaderboard}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contacts" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
       <Footer>
       <img src ={knight}/>
       <span> © Project W.A.R.N. 2019 </span>
     </Footer>
    </div>
    </Router>


    // <Footer>
    //   <span>copyright Project W.A.R.N. 2019</span>
    // </Footer>
  );
}

export default App;
