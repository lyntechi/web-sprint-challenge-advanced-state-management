import React, { useState } from "react";
import { addSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

function Form(props) {
    console.log('this is props', props)
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const handleInput = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <p>Name</p>
        <br />

        <input
          id="name"
          name="name"
          type="text"
          value={smurf.name}
          onChange={handleInput}
        />
        <br />
      </label>
      <label htmlFor="age">
        <p>Age</p>
        <br />

        <input
          id="age"
          name="age"
          type="number"
          value={smurf.age}
          onChange={handleInput}
        />
        <br />
      </label>
      <label htmlFor="height">
        <p>Height</p>
        <br />

        <input
          id="height"
          name="height"
          type="text"
          value={smurf.height}
          onChange={handleInput}
        />
        <br />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
const mapDispatchToProps = {
    addSmurf: addSmurf
}
export default connect(null, mapDispatchToProps)(Form);
