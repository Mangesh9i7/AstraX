// import React from "react";

export default function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="assets/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            Over 2 million AstraX clients contribute to more than 20% of all
            retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds and government securites</li>
              </ul>
            </div>
            <img
              className="mt-5"
              style={{ width: "90%" }}
              src="assets/pressLogos.png"
              alt="pressLogos image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
