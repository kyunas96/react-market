import React, { useState, useEffect } from "react";
import StocksAPI from "../API/stocks_api";

const TestComponent = () => {
  const [tickerData, setTickerData] = useState({});

  /**
   * empty dependency list: runs on initial render
   * no dependency list: runs everytime
   */

  useEffect(() => {
    StocksAPI.get_ticker("AAPL")
      .then((res) => res.data)
      .then(({ count, result }) => setTickerData(result));
  }, [])

  return <div>{JSON.stringify(tickerData)}</div>;
};

export default TestComponent;
