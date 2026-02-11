export default function Pricing() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-4">
          <h1 className="mb-5">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparancy
            in india. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See pricing <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 row">
          <div className="border row">
            <div className="col-6 border-end text-center">
              <h1 className="m-4">&#8377; 0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 text-center">
              <h1 className="m-4">&#8377; 20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
