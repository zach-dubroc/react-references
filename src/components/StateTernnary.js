import React from "react";

function StateTernary() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  function ChangeMind() {
    setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut);
  }

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>StateTernary Practice</h1>
      </div>
      <div className="col-sm-6">
        <h3 onClick={ChangeMind}>am i going out?</h3>
      </div>
      <div className="col-sm-6">
        <h5>{isGoingOut ? "yes" : "no"}</h5>
      </div>
    </div>
  );
}

export default StateTernary;
