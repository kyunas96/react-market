import keys from "../keys";
import FinnhubAPI from "./finnhub_api";

const get_ticker = (ticker) => FinnhubAPI.get(`/search?q=${ticker}`);
const get_market_news = () => FinnhubAPI.get("/news?category=general");
const get_ticker_news = (ticker) =>
  FinnhubAPI.get(`company-news?symbol=${ticker}`);
const get_basic_financials = (ticker) =>
  FinnhubAPI.get(`/stock/metric?symbol=${ticker}&metric=all`);

const StocksAPI = {
  get_ticker,
  get_market_news,
  get_ticker_news,
  get_basic_financials,
};

export default StocksAPI;
