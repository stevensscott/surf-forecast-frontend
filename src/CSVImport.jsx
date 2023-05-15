import { useState } from "react";
import axios from "axios";

export function CSVImport() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("My handle submit is working");
  };
  return (
    <div className="card card h-300">
      <div className="form-group" id="conditions-new">
        <div className="card-body">
          <h1>Upload Multi Day Conditions via CSV</h1>
          {/* <form className="condition_form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input className="form-control" type="file" id="formFile"></input>
            </div>

            <button id="condition_submit" type="submit">
              Submit
            </button>
          </form> */}
          <form onSubmit={handleSubmit}>
            <input type="file" name="file" />
          </form>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}
