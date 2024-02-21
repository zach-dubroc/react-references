import React from "react";
//can destructure with {useState}

function State() {
  const [result, setResult] = React.useState("no");

  function ChangeAnswer() {
    setResult("yes");
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1 onClick={ChangeAnswer}>is state important?</h1>
      </div>
      <div className="col-sm-12">
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default State;
