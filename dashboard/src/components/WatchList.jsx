// src/components/WatchList.jsx
import React, { useState } from "react";
import { watchlist } from "../data/data";

// MUI imports
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

const WatchList = () => {
  return (
    <div
      className="watchlist-container border-end vh-100 bg-white shadow-sm"
      style={{ width: "350px" }}
    >
      <div className="search-container p-3 border-bottom d-flex align-items-center bg-light">
        <input
          type="text"
          placeholder="Search eg: infy, bse"
          className="form-control form-control-sm border-0 bg-transparent shadow-none"
        />
        <span className="text-muted small ms-2">{watchlist.length}/50</span>
      </div>

      <ul className="list-unstyled mb-0">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClass = stock.isDown ? "text-danger" : "text-success";

  return (
    <li
      className="border-bottom px-3 py-2 transition-all"
      style={{
        cursor: "pointer",
        minHeight: "55px",
        backgroundColor: isHovered ? "#fdfdfd" : "transparent",
        position: "relative", // Needed for absolute positioning of buttons
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT SECTION - Name always visible */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: 0 }} className={colorClass}>
            {stock.name}
          </p>
        </div>

        {/* RIGHT SECTION - Price and Percentage */}
        <div className="d-flex align-items-center text-end">
          {/* ACTION BUTTONS - Positioned to the left of the values when hovered */}
          {isHovered && (
            <div
              style={{
                display: "flex",
                gap: "4px",
                backgroundColor: "#fdfdfd", // Matches hover bg to hide text underneath if necessary
                paddingRight: "8px",
              }}
            >
              <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
                <button
                  style={{
                    fontSize: "11px",
                    height: "24px",
                    padding: "0 8px",
                    fontWeight: "bold",
                    backgroundColor: "#198754",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  BUY
                </button>
              </Tooltip>

              <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
                <button
                  style={{
                    fontSize: "11px",
                    height: "24px",
                    padding: "0 8px",
                    fontWeight: "bold",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  SELL
                </button>
              </Tooltip>

              <button
                style={{
                  backgroundColor: "#dfe9f1",
                  border: "0.5px",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  cursor: "pointer",
                }}
              >
                <BarChartOutlined style={{ fontSize: "18px" }} />
              </button>
              <button
                style={{
                  backgroundColor: "#dfe9f1",
                  border: "0.5px",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  cursor: "pointer",
                }}
              >
                <MoreHoriz style={{ fontSize: "18px" }} />
              </button>
            </div>
          )}

          <span className="text-muted small me-1">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown fontSize="small" className="text-danger" />
          ) : (
            <KeyboardArrowUp fontSize="small" className="text-success" />
          )}
          <span className="ms-2 fw-semibold text-dark">{stock.price}</span>
        </div>
      </div>
    </li>
  );
};

export default WatchList;
