import React from "react";

function TernaryPractice() {
  const murderIF = true;
  //   let answer = murderIF === true ? "yes" : "no";
  let answer = murderIF ? "Yes" : "no";

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>ternary?</h1>
      </div>
      <div className="col-sm-4">
        <h2>Was there a murder in savannah</h2>
        <h4>{answer}</h4>
      </div>
    </div>
  );
}
export default TernaryPractice;
