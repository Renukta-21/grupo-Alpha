const express = require("express")
const config = require("../server/config")
const { getToken } = require("./api/auth")

const app = express()

app.get("", (req,res)=>{
  res.send("Main route")
})
app.get("/api/token", async(req,res)=>{
  const response = await getToken()
  res.send(response)
})

app.listen(config.PORT, ()=>{
  console.log(`Server started on ${config.PORT}`)
})