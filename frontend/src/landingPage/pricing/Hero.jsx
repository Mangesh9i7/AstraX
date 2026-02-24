export default function Hero() {
  return (
    <div className="container my-5 pt-5">
      <div className="text-center mt-5 border-bottom shadow-md">
        <h1>Pricing</h1>
        <h4 className="fs-5 text-muted mb-5">
          Free equity investment and flat &#8377;20 traday anf &O trades
        </h4>
      </div>
      <div className="row text-center mt-5 pt-5">
        <div className="col-4">
          <img src="assets/pricingEquity.svg" alt="pricingEquity image" />
          <h3>Free equity delivery</h3>
          <p>
            You can invest in stocks and hold them long-term without paying
            delivery charges.
          </p>
        </div>
        <div className="col-4">
          <img src="assets/intradayTrades.svg" alt="intradayTrades image" />
          <h3>Intraday and F&O trades</h3>
          <p>
            Trade shares within the same day or explore futures and options at
            low cost.
          </p>
        </div>
        <div className="col-4">
          <img src="assets/pricingMF.svg" alt="pricingMF image" />
          <h3>Free delivery Mutual Funds</h3>
          <p>
            Invest in mutual funds easily and enjoy zero commission on delivery
            investments.
          </p>
        </div>
      </div>
    </div>
  );
}
