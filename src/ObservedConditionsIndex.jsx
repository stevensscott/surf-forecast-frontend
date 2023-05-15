import { Modal } from "./Modal";
import { useEffect, useState } from "react";
import { ConditionNew } from "./ConditionNew";
import { CSVImport } from "./CSVImport";
import axios from "axios";

export function ObservedConditionsIndex() {
  const [isConditionVisible, setIsConditionVisible] = useState(false);
  const [isCsvVisible, setIsCsvVisible] = useState(false);
  const [observed_conditions, setObservedConditions] = useState([]);
  const [count, setCount] = useState([]);

  let condition_count = Math.ceil(count / 5);

  const getObservedCount = () => {
    axios.get(`http://localhost:3000/observed_conditions`).then((response) => {
      setCount(response.data.count);
    });
  };

  const handleIndexObservedConditions = (page) => {
    axios.get(`http://localhost:3000/observed_conditions?page_number=${page}`).then((response) => {
      setObservedConditions(response.data.observed_conditions);
    });
  };

  useEffect(handleIndexObservedConditions, []);
  useEffect(getObservedCount, []);

  const pageButtons = [];
  for (let i = 1; i <= condition_count; i++) {
    pageButtons.push(
      <li onClick={() => handlePageChange(i)} key={i} className="page-item disabled">
        <button className="page-link" tabIndex="-1">
          {i}
        </button>
      </li>
    );
  }

  //Also need to track total number of records somehow in order to dynamically display page num buttons
  //

  const handlePageChange = (page) => {
    console.log("page #: " + page);
    handleIndexObservedConditions(page);
  };
  const handleShowForm = () => {
    setIsConditionVisible(true);
  };
  const handleClose = () => {
    setIsConditionVisible(false);
  };
  const handleShowCSV = () => {
    setIsCsvVisible(true);
  };
  const handleCloseCSV = () => {
    setIsCsvVisible(false);
  };

  return (
    <div>
      <button
        onClick={handleShowForm}
        id="condition_button"
        type="button"
        className="btn btn-dark"
        href="./enterConditionTest"
      >
        Enter Single Observed Surf Condition
      </button>
      <button onClick={handleShowCSV} type="button" className="btn btn-dark" id="csv_button">
        Upload Multi Day Coonditions Via CSV
      </button>
      <h2 className="py-5"> Observed Surf Conditions</h2>
      <table className="table table-responsive table-sm table-hover">
        <thead>
          <tr className="table">
            <th scope="col" className="col-sm-1 th-sm">
              {" "}
              Date{" "}
            </th>

            <th scope="col">Actual Condtions</th>
            <th scope="col">Board Ridden</th>
            <th scope="col">Actual Match Forecast?</th>
          </tr>
        </thead>
        <tbody>
          {observed_conditions.map((observed_condition) => (
            <tr key={observed_conditions.id}>
              <td>{observed_condition.date}</td>
              <td>{observed_condition.actual_condition}</td>
              <td>{observed_condition.board_ridden}</td>
              <td>{observed_condition.match_forecast}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="...">
        <ul className="pagination pagination-sm">{pageButtons}</ul>
      </nav>

      <Modal show={isConditionVisible} onClose={handleClose}>
        <ConditionNew />
      </Modal>
      <Modal show={isCsvVisible} onClose={handleCloseCSV}>
        <CSVImport />
      </Modal>
    </div>
  );
}
