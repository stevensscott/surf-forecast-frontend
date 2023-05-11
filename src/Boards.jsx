import { Modal } from "./Modal";
import { useState } from "react";
import { BoardShow } from "./BoardShow";
export function Boards(props) {
  const [isBoardVisible, setIsBoardVisible] = useState(false);
  const [currentBoard, setCurrentBoard] = useState({});

  const handleShowForm = (board) => {
    setIsBoardVisible(true);
    setCurrentBoard(board);
  };
  const handleClose = () => {
    setIsBoardVisible(false);
  };
  console.log(props, "PROPS");
  return (
    <div className="container">
      <h4 className="py-5">Current Boards In My Garage</h4>
      <div className="row">
        {props.boards.map((board) => (
          <div key={board.id} className="col-sm-4">
            <div className="card mt-3">
              <img className="card-img-top" style={{ maxWidth: "500px" }} src={board.image} alt="Card image cap"></img>
              <div className="card-body">
                <h2 className="card-title">{board.make + " " + board.board_model + " " + board.size}</h2>
              </div>
              <div className="card-body">
                <button href="#" className="btn btn-dark" onClick={() => handleShowForm(board)}>
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={isBoardVisible} onClose={handleClose}>
        <BoardShow board={currentBoard} />
      </Modal>
    </div>
  );
}
