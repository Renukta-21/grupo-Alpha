import axios from 'axios'

const syscomInstance = axios.create({
  baseURL: 'https://developers.syscom.mx/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default syscomInstance
