import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Container } from "../components/Grid";

class About extends Component {

  render() {
    return (
      <Container>
          <Col size="lg-12">
            <Jumbotron>
              <h1>
              Instructions
              </h1>
            </Jumbotron>
          </Col>

          <p>The current controls are very simple.
            
            WASD or Arrow Keys are used to move. 
            
            Moving towards an enemy will automatically attack them, if they're in range. 
            
            By default, the Knight has a range of 1, the Archer has a range of 4, and the Wizard has a range of 2.
            
            Pressing the Escape Key will open the menu. 
            
            From here you may use special moves, which will cost mana. 
            
            At the moment, the only special moves are timed buffs.</p>
      </Container>
    );
  }
}

export default About;
