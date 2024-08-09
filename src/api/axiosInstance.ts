import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    console.error("Request error:", error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, logging out...")
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
