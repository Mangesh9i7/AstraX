export default function Hero() {
  return (
    <div className="container my-5 pt-5">
      <div className="row align-items-center">
        <div className="text-center">
          <img
            src="assets/homeHero.png"
            alt="homeHero img"
            className="img-fluid rounded"
          />
          <h1 className="fw-bold mb-3">Invest in everything</h1>
          <p className="lead mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="btn btn-primary btn-lg mb-5">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
