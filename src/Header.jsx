import logo from "./assets/Scott Forecast.png";
export function Header() {
  return (
    <nav className="navbar row  bg-body-tertiary navbar-dark  py-3">
      <div className="col-12 text-center float-center">
        <a href="/">
          <img className="logo" src={logo}></img>
        </a>
      </div>

      <div className="col-12">
        <div className="row" id="">
          <div className="col text-end float-end">
            <a className="active" aria-current="page" href="/boards">
              Current Boards
            </a>
          </div>
          <div className="col-2 text-center float-center">
            <a className="" href="/observed">
              Observed Conditions
            </a>
          </div>
          <div className="col">
            <a className="" href="#">
              Board and Wetsuit Suggestion
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
