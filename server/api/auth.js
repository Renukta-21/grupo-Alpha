import axios from "axios";

const authInstance = axios.create({
    baseURL:"https://developers.syscom.mx/oauth/token"
})

const payload=`client_id=${process.env.CLIENT_ID}&client_secret=${process.env.SECRET_KEY}&grant_type=client_credentials`
export const getToken = ()=>{
    const tokenResponse = await authInstance.post("", payload)
}