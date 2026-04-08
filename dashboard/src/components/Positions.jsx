import { useState, useEffect } from "react";
import axios from "axios";

// import { holdings } from "../data/data";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4040/positions").then((res) => {
      console.log(res.data);
      setPositions(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle border-top">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">Avg.</th>
              <th className="text-end">LTP</th>
              <th className="text-end">P&amp;L</th>
              <th className="text-end pe-3">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const totalPnl = curValue - stock.avg * stock.qty;
              const isProfit = totalPnl >= 0.0;

              // Dynamic Bootstrap classes
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td className="fw-bold">{stock.name}</td>
                  <td className="text-end">{stock.qty}</td>
                  <td className="text-end">{stock.avg.toFixed(2)}</td>
                  <td className="text-end">{stock.price.toFixed(2)}</td>
                  <td className={`text-end fw-bold ${profClass}`}>
                    {totalPnl.toFixed(2)}
                  </td>
                  <td className={`text-end pe-3 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
