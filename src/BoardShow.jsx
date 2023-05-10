export function BoardShow(props) {
  console.log(props.board, "PROPS");

  return (
    <div>
      <div className="card">
        <img className="card-img-top" style={{ maxWidth: "500px" }} src={"test"} alt="Card image cap"></img>
        <div className="card-body">
          <h2 className="card-title">Board: {props.board.make}</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Student: {props.board.board_model}</li>
          <li className="list-group-item">Description:{props.board.board_model}</li>
        </ul>
        <div className="card-body">
          <button href="#" className="btn btn-dark" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
