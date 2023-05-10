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
      </div>
    </div>
  );
}
