export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row pb-5">
        <div className="col-6">
          <h1 className="mb-5">Confidence You Can Count On</h1>
          <h4>Always putting customers first</h4>
          <p className="text-muted">
            More than 1.5 crore investors trust AstraX, managing over 4.5 lakh
            crores in equity investments with us.
          </p>
          <h4 className="pt-2 ">No clutter, no tricks</h4>
          <p className="text-muted">
            Forget gimmicks, spam, or pushy notifications. Our apps are built
            for simplicity, quality, and the freedom to use them your way.
          </p>
          <h4 className="pt-2">The AstraX ecosystem</h4>
          <p className="text-muted">
            AstraX is more than just an app — it’s a universe. With investments
            in 30+ fintech startups, we bring you services tailored to your
            financial journey.
          </p>
          <h4 className="pt-2">Smarter money management</h4>
          <p className="text-muted">
            With features like Nudge and Kill Switch, we don’t just enable
            transactions — we empower you to make better financial decisions.
          </p>
        </div>
        <div className="col-6">
          <img
            className="w-75"
            src="assets/ecosystem.png"
            alt="ecosystem image"
          />
          <div>
            <a href="#" className="px-5 text-decoration-none">
              Discover our products <i className="fa-solid fa-right-long"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Experience Kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
