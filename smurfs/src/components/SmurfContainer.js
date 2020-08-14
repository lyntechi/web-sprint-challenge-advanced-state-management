import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";
export function SmurfContainer(props) {
  const{smurfs}=props;
  
  return <div className="smurf-container">
      {smurfs.map(smurf=>{
          return <SmurfCard smurf={smurf} key={smurf.id}/>
      })}
  </div>;
}

const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(SmurfContainer);
