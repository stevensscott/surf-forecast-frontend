import axios from "axios";
import { useEffect, useState } from "react";
import { ConditionsIndex } from "./ConditionsIndex";
import { Routes, Route } from "react-router-dom";
import { Boards } from "./Boards";
import { Observed } from "./Observed";
export function Content() {
  const [conditions, setConditions] = useState([]);

  const handleIndexConditions = () => {
    axios.get("http://localhost:3000/conditions").then((response) => {
      setConditions(response.data);
    });
  };

  useEffect(handleIndexConditions, []);
  return (
    <div className="container">
      {/* <ConditionsIndex conditions={conditions} /> */}

      <Routes>
        <Route path="/" element={<ConditionsIndex conditions={conditions} />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/observed" element={<Observed />} />
      </Routes>
    </div>
  );
}
