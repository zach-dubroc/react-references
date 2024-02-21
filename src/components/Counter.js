import React from "react";

function NumCounter(props) {
  return (
    <div className="col-sm-4">
      <h5>current number: {props.number}</h5>
    </div>
  );
}

function CounterPractice() {
  const [count, setCount] = React.useState(0);

  console.log(count);

  function Add() {
    setCount((prevCount) => prevCount + 1);
    // setCount((oldvalue) => oldvalue + 1);
    // setCount(count + 1);
  }
  function Subtract() {
    setCount((prevCount) => prevCount - 1);
    // setCount((oldvalue) => oldvalue - 1);
  }

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>countr</h1>
      </div>
      <div className="col-sm-4">
        <input onClick={Add} type="button" value="add" />
      </div>
      <NumCounter number={count} />
      <div className="col-sm-4">
        <input onClick={Subtract} type="button" value="subtract" />
      </div>
    </div>
  );
}

export default CounterPractice;
