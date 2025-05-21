import React from "react";
import MarketData from "../Json/DashBoardJson/Market.json";
import "../styles/Market.css";

const Market = () => {
  return (
    <div className="MarketContainer">
      <h1 className="MarketTitle">Market intelligence</h1>
      <div className="DataVisiblesMarket">
        {MarketData.map((Items, index) => (
          <div className="textSegment" key={Items.id || index}>
            <span
              className="markMarketText"
              style={{ backgroundColor: Items.markColor }}
            ></span>
            <p className="textMarketStyle">{Items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
