import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurf } from "../actions/smurfActions";
import SmurfContainer from "../components/SmurfContainer"
import Form from './Form'


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSmurf();
  }
  render() {
 
    return (
      <div className="App">
        <h1>Create your Smurfs Village</h1>
        <Form/>
        <SmurfContainer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchSmurf })(App);
