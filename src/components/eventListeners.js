function EventListeners() {
  function HandleClick() {
    console.log("click");
  }

  function ImgHover() {
    console.log("Hovered Image");
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <img
          onMouseEnter={ImgHover}
          src="https://picsum.photos/640/360"
          alt=""
        />
      </div>
      <div className="col-sm-12">
        <button onClick={HandleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default EventListeners;
