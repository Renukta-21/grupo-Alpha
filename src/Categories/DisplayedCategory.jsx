import CategoryCard from "./CategoryCard"

const DisplayedCategory = ({ categories }) => {
  return (
    <div className="flex-grow p-3 bg-yellow-300 flex flex-col">
      <div className="p-3 h-full bg-red-400 flex-grow flex">
        <div className="flex flex-col justify-between">
          {categories.map((c) => {
            return (
              <CategoryCard
                key={c.id}
                id={c.id}
                nombre={c.nombre}
                nivel={c.nivel}
              />
            )
          })}
        </div>
        <div className="bg-green-500 flex-grow">CONTENT</div>
      </div>
    </div>
  )
}

export default DisplayedCategory
