export function BoardShow(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div>
            <h2 className="card-title">{props.board.make + " " + props.board.board_model + " " + props.board.size}</h2>
            <h3>Best Conditions For Me:</h3>
            <p>{props.board.best_conditions}</p>
            <h3>Board Description:</h3>
            <p>{props.board.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
