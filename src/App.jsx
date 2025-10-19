import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import apiInstance from './apiRoutes.js'
import DisplayedCategory from './Categories/DisplayedCategory.jsx'
/* import mockup from "./categoryMockup.json" */

function App() {
  const [categories, setCategories] = useState([])
  const [byCategory, setByCategory] = useState([])

  useEffect(() => {
    const fetchData = async () => await retrieveCategories()
    fetchData()
  }, [])

  useEffect(() => {
    
  }, [byCategory])

  const retrieveCategories = async () => {
    try {
      const response = await apiInstance.get('/categories')
      setCategories(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const retrieveByCategory = async (id) => {
    try {
      if (byCategory.find((c) => c.id === id)) return

      const response = await apiInstance.get(`/categories/${id}`)
      console.log(response.data)
      setByCategory((prevData) => {
        return [
          ...prevData,
          { id: response.data.id, subcategorias: response.data.subcategorias },
        ]
      })
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar categories={categories} />
      <DisplayedCategory
        categories={categories}
        byCategory={byCategory}
        retrieveByCategory={retrieveByCategory}
      />
    </div>
  )
}

export default App
