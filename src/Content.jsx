import axios from "axios";
import { useEffect, useState } from "react";
import { ConditionsIndex } from "./ConditionsIndex";
import { Routes, Route } from "react-router-dom";
import { Boards } from "./Boards";
import { ObservedConditionsIndex } from "./ObservedConditionsIndex";

import { ConditionNew } from "./ConditionNew";

export function Content() {
  const [conditions, setConditions] = useState([]);
  const [boards, setBoards] = useState([]);

  const handleIndexConditions = () => {
    axios.get("http://localhost:3000/conditions").then((response) => {
      setConditions(response.data);
    });
  };

  const handleIndexBoards = () => {
    axios.get("http://localhost:3000/boards").then((response) => {
      setBoards(response.data);
    });
  };

  useEffect(handleIndexConditions, []);
  useEffect(handleIndexBoards, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ConditionsIndex conditions={conditions} />} />
        <Route path="/boards" element={<Boards boards={boards} />} />
        <Route path="/observed_conditions" element={<ObservedConditionsIndex />} />
        <Route path="/enterConditionTest" element={<ConditionNew />} />
      </Routes>
      {/* <Modal show={isBoardShowVisible} onClose={handleClose}>
        <BoardShow board={currentBoard} />
      </Modal> */}
    </div>
  );
}
