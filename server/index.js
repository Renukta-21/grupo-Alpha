const express = require("express")
const config = require("../server/config")
const { getCategories, getCategoryItems } = require("./api/syscomAPI")

const app = express()

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
app.get("/categories/:id",async(req,res)=>{
  const categoryID = req.params.id
  const response = await getCategoryItems(categoryID)
  console.log(response)
  res.end()
})
app.listen(config.PORT, ()=>{
  console.log(`Server started on ${config.PORT}`)
})