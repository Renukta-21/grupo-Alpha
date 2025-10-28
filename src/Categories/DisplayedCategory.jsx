import { useState } from 'react'
import CategoryCard from './CategoryCard'

const DisplayedCategory = ({ categories, retrieveByCategory, byCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const selectedData = byCategory.find((c) => c.id === selectedCategory)

  const handleOpenSubCategory=(e)=>{
    console.log(selectedCategory)
  }
  return (
  <div className="flex-grow p-3 bg-logoWhite flex flex-col">
    <div className="p-3 h-full bg-white flex-grow flex rounded-2xl">
      {/* Lista de categorías */}
      <div className="flex flex-col justify-between">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            id={c.id}
            nombre={c.nombre}
            nivel={c.nivel}
            retrieveByCategory={retrieveByCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>

      {/* Contenido derecho */}
      <div
        className={`bg-white flex-grow flex max-sm:hidden ${
          !selectedCategory && 'items-center justify-center flex-nowrap'
        }`}
      >
        {selectedCategory ? (
          <div
            className={`grid gap-2 p-2 w-full ${
              selectedData?.subcategorias.length > 20
                ? 'grid-cols-2 text-center'
                : 'grid-cols-1 place-items-center '
            }`}
          >
            {selectedData?.subcategorias.map((sc) => (
              <div
                key={sc.id}
                className={`bg-lightGray p-2 rounded text-left cursor-pointer ${
              selectedData?.subcategorias.length > 20
                ? ''
                : 'text-center w-[350px]'
            }`}
            onClick={handleOpenSubCategory}
              >
                {sc.nombre}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-lightGray p-24 rounded-2xl">
            <h3 className="text-4xl">Elija una opción</h3>
          </div>
        )}
      </div>
    </div>
  </div>
)
}

export default DisplayedCategory
