import axios from "axios";
import { useEffect } from "react";

export function Content() {
  const handleIndexConditions = () => {
    axios.get("http://localhost:3000/conditions").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(handleIndexConditions, []);
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  );
}
