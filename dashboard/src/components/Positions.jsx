import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle border-top">
          <thead className="table-light">
            <tr>
              <th className="ps-3">Product</th>
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
                  <td className="ps-3 text-muted small">{stock.product}</td>
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
