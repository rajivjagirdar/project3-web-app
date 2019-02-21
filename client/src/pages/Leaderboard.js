import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css"
//import moment from "moment"
import Moment from "react-moment"
//import { TimeDate } from "../components/React-Moment/react-moment";




class Leaderboard extends Component {
  state = {
    scores: [],
    player: "",
    score: "",
    date: ""
  };

  componentDidMount() {
    this.loadScores();
  }

  loadScores = () => {
    API.getScores()
      .then(res =>
       this.setState({ scores: res.data, player: "", score: "", date: ""})
       // console.log("why no load")
      )
      .catch(err => console.log(err));
     // window.location.reload();
  };

  render() {
    let counter = 1;

    return (
      <Container fluid>

          <Col size="lg-12">
            <Jumbotron>
              <h1>High Scores Leaderboard!!!</h1>
            </Jumbotron>
            </Col>


            <Row>
            <Col size="lg-3">
          <h3>#</h3> 
          {this.state.scores.length ? (
              <List>
                {this.state.scores.map(board => (
                  <ListItem key={board.userRank}>
                      <strong>
                        {counter++}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>


            <Col size="lg-3">
            <h3>Player</h3>
            {this.state.scores.length ? (
              <List>
                {this.state.scores.map(board => (
                  <ListItem key={board.score}>
                      <strong>
                        {board.player}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          <Col size="lg-3">
          <h3>Score</h3>
            {this.state.scores.length ? (
              <List>
                {this.state.scores.map(board => (
                  <ListItem key={board.score}>
                      <strong>
                        {board.score}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          <Col size="lg-3">
          <h3>Date</h3>
            {this.state.scores.length ? (
              <List>
                {this.state.scores.map(board => (
                  <ListItem key={board.score}>
                      <strong>
                      <Moment parse="YYYY-MM-DD HH:mm">
                      {board.date}
                      </Moment>
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          </Row>
      </Container>

    );
  }
}

export default Leaderboard;
