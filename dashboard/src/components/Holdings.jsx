import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4040/holdings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => console.error("Error fetching holdings:", err));
  }, []);

  // Calculate totals dynamically
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0,
  );
  const currentValue = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0,
  );
  const totalPnl = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">Instrument</th>
              <th scope="col" className="text-end">
                Qty.
              </th>
              <th scope="col" className="text-end">
                Avg. cost
              </th>
              <th scope="col" className="text-end">
                LTP
              </th>
              <th scope="col" className="text-end">
                Cur. val
              </th>
              <th scope="col" className="text-end">
                P&L
              </th>
              <th scope="col" className="text-end">
                Net chg.
              </th>
              <th scope="col" className="text-end">
                Day chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const totalPnl = curValue - stock.avg * stock.qty;
              const isProfit = totalPnl >= 0.0;

              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td className="text-end">{stock.qty}</td>
                  <td className="text-end">{stock.avg.toFixed(2)}</td>
                  <td className="text-end">{stock.price.toFixed(2)}</td>
                  <td className="text-end">{curValue.toFixed(2)}</td>
                  <td className={`text-end fw-bold ${profClass}`}>
                    {totalPnl.toFixed(2)}
                  </td>
                  <td className={`text-end ${profClass}`}>{stock.net}</td>
                  <td className={`text-end ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Dynamic totals */}
      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {totalPnl.toFixed(2)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
