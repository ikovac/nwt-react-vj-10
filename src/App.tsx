import React, { Component } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={StudentList} />
          <Route path="/student/:id" component={StudentDetails} />
        </Container>
      </Router>
    );
  }
}

export default App;
