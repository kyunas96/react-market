import React, { useEffect, useState } from "react";
import StocksAPI from "../../API/stocks_api";

const SplashPageSearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [searchData, setSearchData] = useState({});
  // state
  // effect

  useEffect(() => {
    StocksAPI.get_ticker(searchVal)
      .then(res => res.data)
      .then(({count, result}) => setSearchData(result))
  }, [searchVal]);

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <div>{JSON.stringify(searchData)}</div>
    </div>
  );
};

export default SplashPageSearchBar;
