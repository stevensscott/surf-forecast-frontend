import axios from "axios";
import { useEffect, useState } from "react";
import { ConditionsIndex } from "./ConditionsIndex";
import { Routes, Route } from "react-router-dom";
import { Boards } from "./Boards";
import { ObservedConditionsIndex } from "./ObservedConditionsIndex";
import { Modal } from "./Modal";
import { BoardShow } from "./BoardShow";
import { ConditionNew } from "./ConditionNew";

export function Content() {
  const [conditions, setConditions] = useState([]);
  const [observed_conditions, setObservedConditions] = useState([]);
  const [boards, setBoards] = useState([]);
  const [isBoardShowVisible, setIsBoardShowVisible] = useState(false);

  const handleIndexConditions = () => {
    axios.get("http://localhost:3000/conditions").then((response) => {
      setConditions(response.data);
    });
  };

  const handleIndexObservedConditions = () => {
    axios.get("http://localhost:3000/observed_conditions").then((response) => {
      setObservedConditions(response.data);
    });
  };

  const handleIndexBoards = () => {
    axios.get("http://localhost:3000/boards").then((response) => {
      setBoards(response.data);
    });
  };
  const handleClose = () => {
    setIsBoardShowVisible(false);
  };
  useEffect(handleIndexConditions, []);
  useEffect(handleIndexObservedConditions, []);
  useEffect(handleIndexBoards, []);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ConditionsIndex conditions={conditions} />} />
        <Route path="/boards" element={<Boards boards={boards} />} />
        <Route
          path="/observed_conditions"
          element={<ObservedConditionsIndex observed_conditions={observed_conditions} />}
        />
        <Route path="/enterConditionTest" element={<ConditionNew />} />
      </Routes>
      {/* <Modal show={isBoardShowVisible} onClose={handleClose}>
        <BoardShow board={currentBoard} />
      </Modal> */}
    </div>
  );
}
