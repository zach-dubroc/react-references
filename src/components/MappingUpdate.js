function MappingUpdate() {
  const thingArr = ["thing1", "thing2"];
  const thingElements = thingArr.map((thing) => <p>{thing}</p>);

  function AddItem() {
    const newThing = `thing ${thingArr.length + 1}`;
    thingArr.push(newThing);
    console.log(thingArr);
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <button onClick={AddItem}>item</button>
        {thingArr}
      </div>
    </div>
  );
}

export default MappingUpdate;
