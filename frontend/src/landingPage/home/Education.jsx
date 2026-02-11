export default function Education() {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-6">
          <img
            className="mb-5"
            src="assets/education.svg"
            alt="Education image"
          />
        </div>
        <div className="col-6">
          <h2 className="mb-5">Free and open market education</h2>
          <p>
            Varsity, the largest online marcket education book in the world
            covering everything from the basics to advanced things.
          </p>
          <a href="#" className=" mb-5 text-decoration-none">
            Versity <i className="fa-solid fa-right-long"></i>
          </a>
          <p className="mt-5">
            Trading Q&A, the most active trading and investment community in
            India for all your marcket related queries.
          </p>
          <a href="#" className="mb-5 text-decoration-none">
            Trading Q&A <i className="fa-solid fa-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
