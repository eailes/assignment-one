import React from "react";

const UserInput = props => {
  const style = {
    textAlign: "center",
    width: "200px",
    border: "1px solid",
    boxShadow: "1px 2px 3px black",
    margin: "5px"
  };

  return (
    <div>
      <input
        style={style}
        type="text"
        onChange={props.change}
        value={props.username}
      />
    </div>
  );
};

export default UserInput;
