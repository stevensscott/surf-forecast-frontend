export function Boards(props) {
  console.log(props, "PROPS");
  return (
    <div className="container">
      <div className="row">
        {props.boards.map((board) => (
          <div key={board.id} className="col-sm-4">
            <div className="card mt-3">
              <img className="card-img-top" style={{ maxWidth: "500px" }} src={board.image} alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{board.make + " " + board.board_model + " " + board.size}</h2>
              </div>
              <div className="card-body">
                <button href="#" className="btn btn-dark">
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
        {/*        <div className="col-sm">
          {" "}
          <div className="card mt-3">
            <img
              className="card-img-top mt-1"
              style={{ maxWidth: "500px" }}
              src={
                "https://laislasurfsupply.com/wp-content/uploads/2019/03/square-creative-army-huevo-mid-length-pu-surfboard.jpg"
              }
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Test: {}</h2>
            </div>
            <div className="card-body">
              <button href="#" className="btn btn-dark">
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          {" "}
          <div className="card mt-3">
            <img
              className="card-img-top"
              style={{ maxWidth: "500px" }}
              src={"https://www.surfstationstore.com/cdn/shop/products/6_8Mid_5000x.jpg?v=1676904566"}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Test: {}</h2>
            </div>
            <div className="card-body">
              <button href="#" className="btn btn-dark">
                More Info
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
