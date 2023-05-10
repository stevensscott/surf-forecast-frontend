import { Modal } from "./Modal";
import { useState } from "react";
import { ConditionNew } from "./ConditionNew";

export function ObservedConditionsIndex(props) {
  const [isConditionVisible, setIsConditionVisible] = useState(false);

  const handleShowForm = () => {
    setIsConditionVisible(true);
  };
  const handleClose = () => {
    setIsConditionVisible(false);
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
      <h2 className="py-5"> Observed Surf Conditions</h2>
      <table className="table table-responsive table-sm">
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
          {props.observed_conditions.map((observed_condition) => (
            <tr key={props.observed_conditions.id}>
              <td>{observed_condition.date}</td>
              <td>{observed_condition.actual_condition}</td>
              <td>{observed_condition.board_ridden}</td>
              <td>{observed_condition.match_forecast}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={isConditionVisible} onClose={handleClose}>
        <ConditionNew />
      </Modal>
    </div>
  );
}
