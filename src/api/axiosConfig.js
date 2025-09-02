import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://developers.syscom.mx/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
