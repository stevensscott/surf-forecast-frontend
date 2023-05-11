import { Map, Marker } from "pigeon-maps";
export function ConditionsIndex(props) {
  // console.log(props, "PROPS");
  return (
    <div>
      <h4 className="py-5"> 5 Day Surf Forecast</h4>
      <table className="table table-responsive table-hover">
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
      {/* <div id="map">
        <Map height={200} width={400} defaultCenter={[41.4901, -71.3128]} defaultZoom={12}>
          <Marker width={50} anchor={[41.4875, -71.2565]} />
        </Map>
      </div> */}
    </div>
  );
}
