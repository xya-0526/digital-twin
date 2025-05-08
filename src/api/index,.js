import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL

const env = loadEnv(mode, process.cwd())
const request = axios.create({
  baseURL:  apiUrl,
  timeout: 1000,
})

export default request