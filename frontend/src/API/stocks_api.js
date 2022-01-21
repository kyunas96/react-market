import FinnhubAPI from "./finnhub_api";

const get_ticker = (ticker) => FinnhubAPI.get(`/search?q=${ticker}`)

