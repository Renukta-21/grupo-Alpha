const express = require("express")
const config = require("../server/config")
const { getCategories, getCategoryItems,getBrands } = require("./api/syscomAPI")
const cors = require('cors')

const app = express()

app.use(cors())
app.get("", (req,res)=>{
  res.send("Main route")
})

app.get("/categories", async(req,res)=>{
  const response = await getCategories()
  /* console.log(response) */
  res.send(response)
})
app.get("/categories/:id",async(req,res)=>{
  const categoryID = req.params.id
  const response = await getCategoryItems(categoryID)
  res.send(response)
})
app.get("/brands",async(req,res)=>{
  const response = await getBrands()
  res.send(response)
})
app.listen(config.PORT, ()=>{
  console.log(`Server started on ${config.PORT}`)
})