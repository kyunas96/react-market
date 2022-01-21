import keys from '../keys.js'
import axios from 'axios'


const FinnhubAPI = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  timeout: 1000,
  headers: {'X-Finnhub-Token' : 'keys.finnhub_key'}
})

export default FinnhubAPI;