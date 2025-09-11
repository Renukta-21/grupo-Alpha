const axios = require("axios")

const apiInstance = axios.create({
    baseURL:"https://developers.syscom.mx/api/v1"
})


let APItoken 
const setAPIToken = token => {
    APItoken=token
    apiInstance.defaults.headers.common["Authorization"] = `Bearer ${APItoken}`
}

const getCategories = async()=>{
    try {
        const response = await apiInstance.get("/categorias")
        return response.data
    } catch (error) {
        return error.response.data
    }
}

module.exports = {getCategories, setAPIToken}