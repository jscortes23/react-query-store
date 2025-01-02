import axios from "axios";

const productoApi = axios.create({
  baseURL: 'http://localhost:3100',
})

export { productoApi }