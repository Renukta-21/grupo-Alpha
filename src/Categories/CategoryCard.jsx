import { categoryMapping, iconsMap } from "./categoryData"

const CategoryCard = ({ id, nombre, nivel }) => {
  const key = categoryMapping[nombre] || nombre
  const Icon = iconsMap[key]
  const handleCategoryDisplay = (id) => {
    console.log(id)
  }
  return (
    <div
      className="flex p-4 bg-[#181A1B] max-w-[270px]"
      onClick={() => handleCategoryDisplay(id)}
    >
      {Icon ? <Icon className="text-xl" /> : <span>❓</span>}
      <span>{nombre}</span>
    </div>
  )
}
export default CategoryCard