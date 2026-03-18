import { holdings } from "../data/data";

const Holdings = () => {
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
                  <td className="">{stock.name}</td>
                  {/* Added text-end to match headers */}
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

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
