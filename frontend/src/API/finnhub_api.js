import keys from '../keys.js'
import finnhub from 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.api_key = keys.finnhub_key;
const finnhub_client = new finnhub.DefaultApi();

export default finnhub_client;