import React, { useState } from 'react';
import StocksApi from '../API/stocks_api';

const TestComponent = () => {
  const [tickerData, setTickerData] = useState({});


  StocksApi.symbol_search('AAPL');

  return (
    <div>Crap</div>
  )
}

export default TestComponent;