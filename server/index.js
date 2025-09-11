const express = require("express")
const config = require("../server/config")
const { getToken } = require("./api/auth")
const { getCategories, setAPIToken } = require("./api/syscomAPI")

const app = express()

let token
app.get("", (req,res)=>{
  res.send("Main route")
})

/* app.get("/api/token", async(req,res)=>{
  const response = await getToken()
  if(response.access_token) {
    token = response.access_token
    setAPIToken(token)
  }
  res.send(response)
})
 */
app.get("/categories", async(req,res)=>{
  const response = await getCategories()
  res.send(response)
})
app.listen(config.PORT, ()=>{
  console.log(`Server started on ${config.PORT}`)
})