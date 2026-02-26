export default function TicketForm() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle"></i> Account Opening
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Online Account Opening
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Offline Account Opening
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Company / Partnership / HUF Account
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            NRI Account Opening
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Account Opening Charges
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            3-in-1 Account Setup
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-user"></i> Your AstraX Account
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Login Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Password / PIN Reset
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Update Email / Mobile
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Account Modification
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Deactivate / Reactivate Account
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Profile & Personal Details
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-chart-column"></i> Trading & Platforms
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Order Placement Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Charting / Data Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            App / Web Platform Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Margin Requirements
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Positions & PnL Queries
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-wallet"></i> Funds
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Add Funds (Deposit Issues)
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Withdraw Funds (Payout Issues)
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Bank Account Linking
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            UPI / Netbanking Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Fund Settlement Delay
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-solid fa-circle-notch"></i> Console
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Tax P&L
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Holdings Not Showing
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Corporate Actions
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Ledger & Statements
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Reports & Downloads
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa-regular fa-circle"></i> Coin (Mutual Funds)
          </h4>

          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Buy / Sell MF Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            SIP Setup Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            NAV / Order Delay
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Switch / Redeem Issues
          </a>
          <a className="text-dark text-decoration-none d-block mb-2" href="">
            Coin App / Web Issues
          </a>
        </div>
      </div>
    </div>
  );
}
