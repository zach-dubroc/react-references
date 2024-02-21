import React from "react";

function ConditionalRendering() {
  const [isShown, setIsShown] = React.useState(false);
  const [messages, setMessages] = React.useState(["a", "b"]);

  function ShowText() {
    setIsShown((prev) => !prev);
  }

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>conditional rendering</h1>
      </div>
      <div className="row">
        <div className="col-sm-4">{isShown && <p>i'm rendering</p>}</div>
        <button onClick={ShowText}>
          {isShown ? "hide text" : "show text"}
        </button>
      </div>
      <div className="row">
        <div className="col-sm-4">
          {messages.length > 0 ? (
            <h3>
              you have {messages.length} unread
              {messages.length == 1 ? <h3>message</h3> : <h3>messages</h3>}
            </h3>
          ) : (
            <h3>all caught up</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConditionalRendering;
