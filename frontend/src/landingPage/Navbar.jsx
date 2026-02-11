export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white fixed-top shadow-lg
     border-bottom mb-5"
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center mx-3" href="#">
          <img style={{ width: 115 }} src="assets/Logo.jpg" alt="Brand Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-5">
              <a className="nav-link active fs-5" aria-current="page" href="#">
                SignUp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" href="#">
                About
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link active fs-5" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-5" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link active fs-5" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
