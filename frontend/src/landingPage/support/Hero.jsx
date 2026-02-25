export default function Hero() {
  return (
    <div
      className="container py-5 mt-5"
      style={{ background: "#4169e1", borderRadius: "10px" }}
    >
      <div className="row pt-5 text-center text-white">
        <div className="col-6 d-flex flex-column align-items-center">
          <b className="fs-4 pb-2">Support Portal</b>

          <h5 className="mb-4 w-75">
            Search for an answer or browse help topics to create a ticket
          </h5>

          <input
            type="text"
            className="form-control w-75 mb-4"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            style={{ borderRadius: "8px" }}
          />

          <div className="w-75 text-start mt-3">
            <a
              href="#"
              className="d-block text-white mb-2 text-decoration-none"
            >
              Track account opening
            </a>
            <a
              href="#"
              className="d-block text-white mb-2 text-decoration-none"
            >
              Track segment activation
            </a>
            <a
              href="#"
              className="d-block text-white mb-2 text-decoration-none"
            >
              Intraday margins
            </a>
            <a href="#" className="d-block text-white text-decoration-none">
              Kite user manual
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-6 d-flex flex-column align-items-start ps-5">
          <a href="#" className="text-white text-decoration-none mb-3">
            <b className="fs-5">Track Tickets</b>
          </a>

          <h5 className="mb-3">Featured</h5>

          <ul className="text-start">
            <li className="mb-2">
              Current Takeovers and Delisting - January 2024
            </li>
            <li>Latest Intraday leverages - MIS & CO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
