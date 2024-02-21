import React from "react";

function ComplexObjectFavorite(props) {
  let favorite = props.fav ? "favoriteTrue" : "favoriteFalse";
  return (
    <div onClick={props.handleClick} className={`text-center ${favorite}`}>
      x
    </div>
  );
}

function ComplexObjects() {
  const [contact, setContact] = React.useState({
    firstName: "Jim",
    lastName: "Halpert",
    phoneNumber: "+1 (555) 876-5309",
    email: "scrantonstrangler@yahoo.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className="col-sm-4">
      <div className="row">
        <div className="col-sm-12">
          <h1>complex objects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h4>
            {contact.firstName} {contact.lastName}
          </h4>
          <p>{contact.phoneNumber}</p>
          <p>{contact.email}</p>
          <ComplexObjectFavorite
            fav={contact.isFavorite}
            handleClick={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
}

function ComplexArray() {
  //const thingArr = ["thing1", "thing2"];
  const [thingArr, setThingArr] = React.useState(["thing1"]);

  const thingElements = thingArr.map((thing) => <p>{thing}</p>);

  function AddItem() {
    const newThing = `thing ${thingArr.length + 1}`;

    setThingArr((prev) => [...prev, `thing ${prev.length + 1}`]);
  }

  return (
    <div className="col-sm-4">
      <div className="row">
        <div className="col-sm-12">
          <h2>complex state array</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <button onClick={AddItem}>Add Item</button>
        </div>
        <div className="col-sm-12">{thingArr}</div>
      </div>
    </div>
  );
}

function ComplexState() {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>Complex State</h1>
        <ComplexArray />
        <ComplexObjects />
      </div>
    </div>
  );
}

export default ComplexState;
