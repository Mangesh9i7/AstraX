export default function Hero() {
  return (
    <div className="container">
      <div className="row pt-5 mt-5">
        <div className="my-5">
          <h1 className="fw-bold mb-4 text-dark">About AstreX</h1>
          <p className="fs-5 text-secondary">
            At <b>AstreX</b>, we’re redefining the way people trade and invest.
            Our vision is simple: to make financial markets accessible,
            transparent, and empowering for everyone. We understand that trading
            can feel complex, so we’ve built AstreX to be straightforward,
            reliable, and designed with you in mind. Whether you’re just
            starting your investment journey or you’re an experienced trader,
            our platform gives you the tools, insights, and support you need to
            make confident decisions.
          </p>

          <h3 className="fw-semibold mt-4 mb-3 text-dark">
            What we stand for:
          </h3>
          <ul className="list-unstyled">
            <li className="mb-3">
              <b className="text-dark">Simplicity</b>
              <p className="small text-muted mb-0">
                A clean, intuitive platform that makes trading easy to
                understand.
              </p>
            </li>
            <li className="mb-3">
              <b className="text-dark">Transparency</b>
              <p className="small text-muted mb-0">
                Clear pricing, no hidden fees, and honest communication.
              </p>
            </li>
            <li className="mb-3">
              <b className="text-dark">Innovation</b>
              <p className="small text-muted mb-0">
                Fast, secure technology that keeps you ahead in the markets.
              </p>
            </li>
            <li className="mb-3">
              <b className="text-dark">Support</b>
              <p className="small text-muted mb-0">
                Resources, education, and a community to help you grow.
              </p>
            </li>
          </ul>

          <p className="fs-6 text-secondary mt-4">
            At AstreX, trading isn’t just about numbers on a screen — it’s about
            building your financial future with clarity and confidence. We’re
            here to give you the freedom to invest smarter, trade better, and
            achieve more.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
