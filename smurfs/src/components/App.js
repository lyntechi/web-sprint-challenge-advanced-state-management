import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurf } from "../actions/smurfActions";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSmurf();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchSmurf })(App);
