import { categoryMapping, iconsMap } from './categoryData'

const CategoryCard = ({
  id,
  nombre,
  nivel,
  retrieveByCategory,
  setSelectedCategory,
}) => {
  const key = categoryMapping[nombre] || nombre
  const Icon = iconsMap[key]
  const handleCategoryDisplay = async (id) => {
    setSelectedCategory(id)
    await retrieveByCategory(id)
  }
  return (
    <div
      className=" bg-white max-w-[270px] cursor-pointer"
      onClick={() => handleCategoryDisplay(id)}
    >
      <div className='flex p-4 cursor-pointer hover:bg-gray-Hover'>
        {Icon ? <Icon className="text-[18px]" /> : <span>❓</span>}
        <span className='ml-2'>{nombre}</span>
      </div>
      <hr className='bg-gray-300 text-gray-200'/>
    </div>
  )
}
export default CategoryCard
