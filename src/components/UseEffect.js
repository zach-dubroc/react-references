import React from "react";
//redo scrimba on useEffect

function UseEffect() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div className="row text-center">
      <div className="col-sm-12">
        <h1>UseEffect</h1>
      </div>
      <div className="col-sm-12">
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </div>
    </div>
  );
}

export default UseEffect;
