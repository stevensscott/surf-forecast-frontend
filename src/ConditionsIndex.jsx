export function ConditionsIndex(props) {
  // console.log(props, "PROPS");
  return (
    <div>
      <h2 className="py-5"> 5 Day Surf Forecast</h2>
      <table className="table table-responsive">
        <thead>
          <tr className="table">
            <th scope="col" className="col-sm-1">
              {" "}
              Date{" "}
            </th>
            <th scope="col">Wave Height 7AM</th>
            <th scope="col">Wind Direction 7AM</th>
            <th scope="col">Wind Speed 7AM</th>
            <th scope="col">Wave Height 12PM</th>
            <th scope="col">Wind Direction 12PM</th>
            <th scope="col">Wind Speed 12PM</th>
            <th scope="col">Wave Height 5PM</th>
            <th scope="col">Wind Direction 5PM</th>
            <th scope="col">Wind Speed 5PM</th>
          </tr>
        </thead>
        <tbody>
          {props.conditions.map((condition) => (
            <tr key={props.conditions.id}>
              <td>{condition.date}</td>
              <td>{condition.wave_height_7AM}</td>
              <td>{condition.wind_direction_7AM}</td>
              <td>{condition.wind_speed_7AM}</td>
              <td>{condition.wave_height_12PM}</td>
              <td>{condition.wind_direction_12PM}</td>
              <td>{condition.wind_speed_12PM}</td>
              <td>{condition.wave_height_5PM}</td>
              <td>{condition.wind_direction_5PM}</td>
              <td>{condition.wind_speed_5PM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
