export default function Footer() {
  return (
    <footer
      className="border-top shadow-lg"
      style={{
        backgroundColor: "#fff",
        padding: "2rem 0",
        marginTop: "2rem",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              style={{ width: 115 }}
              src="assets/Logo.jpg"
              alt="Brand Logo"
            />
            <p className="py-3">
              &copy;2026, AstreX Broking Ltd. All rights reserved
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-square-x-twitter"></i>{" "}
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook px-2"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram px-2"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin px-2"></i>
              </a>
            </div>
          </div>

          <div className="col-3">
            <h5>Company</h5>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              About
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Products
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Referral programme
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Astrex.tech
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Press & media
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              AstreX cares (CSR)
            </a>
          </div>

          <div className="col-3">
            <h5>Support</h5>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Support portal
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              A-Connect blog
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              List of charges
            </a>
            <a
              className="text-decoration-none text-muted d-block mb-2"
              href="#"
            >
              Downloads & resources
            </a>
          </div>

          <div className="col-3">
            <h5>Accounts</h5>
            <a className="text-decoration-none text-muted" href="#">
              Open an account
            </a>
            <br />
            <a className="text-decoration-none text-muted" href="#">
              Fund transfer
            </a>
            <br />
            <a className="text-decoration-none text-muted" href="#">
              60 day challenge
            </a>
            <br />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <hr />
            <p
              style={{
                fontSize: "0.9rem",
                color: "#555",
                marginBottom: "0.5rem",
              }}
            >
              AstreX Broking Ltd. is a SEBI-registered intermediary, member of
              NSE & BSE. Depository services are offered through AstreX
              Securities Pvt. Ltd. (CDSL). Commodity trading is conducted via
              AstreX Commodities Pvt. Ltd., MCX Registration No.: 46025.
              Registered Office: #201, Business Tower, Baner Road, Pune –
              411045, Maharashtra, India.
            </p>
            <p style={{ fontSize: "0.85rem", color: "#777" }}>
              Please read the Risk Disclosure Document prescribed by SEBI
              carefully before investing. For grievances, write to{" "}
              <a href="mailto:complaints@astrex.com">complaints@astrex.com</a>.
              You may also lodge complaints on the SEBI SCORES portal for speedy
              redressal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
