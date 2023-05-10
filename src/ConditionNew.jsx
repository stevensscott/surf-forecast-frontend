import { useState } from "react";
import axios from "axios";

export function ConditionNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("My handle submit is working");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/observed_conditions.json", params).then((response) => {
      console.log(response);
      event.target.reset();
      window.location.href = "/observed_conditions";
    });
  };
  return (
    <div className="card card h-300">
      <div className="form-group" id="conditions-new">
        <div className="card-body">
          <h1>Add New Condition</h1>
          <form className="condition_form" onSubmit={handleSubmit}>
            <div className="test">
              <label> Date:</label>
              <br></br>
              <input name="date" type="text" />
            </div>
            <div className="test">
              <label>Actual Conditions:</label>
              <br></br>
              <textarea name="actual_condition" type="textarea" />
            </div>
            <div className="test">
              <label>Board Ridden:</label>
              <br></br>
              <input name="board_ridden" type="text" />
            </div>
            <div className="test">
              <label>Actual Match Forecast:</label>
              <br></br>
              <textarea name="match_forecast" type="textarea" />
            </div>
            <button id="condition_submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
