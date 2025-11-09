import { useEffect, useState } from 'react'
import Navbar, { NavbarOnSmall } from './Navbar'
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
  if (categories.length > 0) {
    const fetchAllSubcategories = async () => {
      try {
        const requests = categories.map(cat =>
          apiInstance.get(`/categories/${cat.id}`)
        )

        const responses = await Promise.all(requests)

        const allData = responses.map(res => ({
          id: res.data.id,
          subcategorias: res.data.subcategorias
        }))

        setByCategory(allData)
      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }

    fetchAllSubcategories()
  }
}, [categories])


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
      <div className='hidden md:block'>
        <Navbar categories={categories} />
      </div>
      <div className='block md:hidden'>
        <NavbarOnSmall categories={categories} byCategory={byCategory}/>
      </div>
      <div className='hidden md:block'>
        <DisplayedCategory
        categories={categories}
        byCategory={byCategory}
      />
      </div>
    </div>
  )
}

export default App
