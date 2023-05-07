export function Boards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card mt-3">
            <img
              className="card-img-top"
              style={{ maxWidth: "500px" }}
              src={
                "https://cdn.shopify.com/s/files/1/1442/7982/products/CI-Mid-Clear-Bottom-Shopify_964b9c89-1fe7-409c-b3f6-3bf00d4d4da2.jpg?v=1647452173"
              }
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Test: {}</h2>
            </div>
            <div className="card-body">
              <button href="#" className="btn btn-dark">
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          {" "}
          <div className="card mt-3">
            <img
              className="card-img-top mt-1"
              style={{ maxWidth: "500px" }}
              src={
                "https://laislasurfsupply.com/wp-content/uploads/2019/03/square-creative-army-huevo-mid-length-pu-surfboard.jpg"
              }
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Test: {}</h2>
            </div>
            <div className="card-body">
              <button href="#" className="btn btn-dark">
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          {" "}
          <div className="card mt-3">
            <img
              className="card-img-top"
              style={{ maxWidth: "500px" }}
              src={"https://www.surfstationstore.com/cdn/shop/products/6_8Mid_5000x.jpg?v=1676904566"}
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h2 className="card-title">Test: {}</h2>
            </div>
            <div className="card-body">
              <button href="#" className="btn btn-dark">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
