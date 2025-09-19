import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import apiInstance from './apiRoutes.js'
import DisplayedCategory from "./Categories/DisplayedCategory.jsx"
import mockup from "./categoryMockup.json"

function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchData = async()=> await retrieveCategories()
    fetchData()
  }, [])
  
  const retrieveCategories= async()=>{
  try {
    /* const response = await apiInstance.get('/categories') */
    setCategories(mockup)
  } catch (error) {
    console.log(error.response.data)
  }
}

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar categories={categories}/>
      <DisplayedCategory categories={categories}/>
    </div>
  )
}
 


export default App