import axios from 'axios'

const URL = process.env.REACT_APP_POKEAPI
console.log(URL)

const axiosInstance = axios.create({
  baseURL: URL
})

export default axiosInstance
