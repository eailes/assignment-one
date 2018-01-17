import React from "react";

const UserOutput = props => {
  return (
    <div className="hero">
      <p>I am {props.username}</p>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default UserOutput;
