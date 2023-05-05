import axios from "axios";
import { useEffect, useState } from "react";
import { ConditionsIndex } from "./ConditionsIndex";
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
      <h1>Scott Surf Forecast</h1>
      <ConditionsIndex conditions={conditions} />
    </div>
  );
}
