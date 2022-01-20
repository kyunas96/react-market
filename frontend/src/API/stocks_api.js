import FinnhubClient from './finnhub_api';

const symbol_search = (ticker, callback, errorCallback) => {
  FinnhubClient.symbolSearch(ticker, (error, data, response) => {
    console.log(response);
    // callback(response);
  });
}

export default {
  symbol_search
}