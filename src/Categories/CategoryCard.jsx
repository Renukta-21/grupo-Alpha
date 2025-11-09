import { useState } from 'react'
import { categoryMapping, iconsMap } from './categoryData'
import { GrNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

const CategoryCard = ({
  id,
  nombre,
  nivel,
  retrieveByCategory,
  setSelectedCategory,
  harcodedStyle,
}) => {
  const key = categoryMapping[nombre] || nombre
  const Icon = iconsMap[key]
  const handleCategoryDisplay = async (id) => {
    setSelectedCategory(id)
    await retrieveByCategory(id)
  }
  return (
    <div
      className={`${
        harcodedStyle ||
        'bg-white  max-w-[270px] max-sm:max-w-full cursor-pointer'
      } `}
      onClick={() => handleCategoryDisplay(id)}
    >
      <div className="flex p-4 cursor-pointer hover:bg-gray-Hover">
        {Icon ? <Icon className="text-[18px]" /> : <span>❓</span>}
        <span className="ml-2">{nombre}</span>
      </div>
      <hr className="bg-gray-300 text-gray-200" />
    </div>
  )
}
export const CategoryMenuCard = ({
  id,
  nombre,
  nivel,
  harcodedStyle,
  setCurrentCategory,
  currentCategory,
  byCategory,
  categories,
}) => {
  const key = categoryMapping[nombre] || nombre
  const Icon = iconsMap[key]
const handleBackup=()=>{
  setCurrentCategory(null)
}
  return (
    <div>
      {currentCategory == id && (
        <div className="bg-MainBlue absolute inset-0">
          <div className="bg-MainBlue py-5 px-3 flex justify-between items-center border-b-[1px] border-white box">
            <h2 className="text-white text-xl font-semibold">{nombre}</h2>
            <button>
              <IoMdClose className="text-gray-400 text-xl" />
            </button>
          </div>
          <div className='text-lightIconBlue font-semibold flex py-3 px-4 items-center gap-4' onClick={handleBackup}>
            <GrFormPrevious />
            <p>Volver</p>
          </div>
          <div className='w-full h-full bg-secondayBlue'>
            {byCategory.find(c=> c.id== currentCategory).subcategorias.map(s=>(
              <SubCategoryCard key={s.id} name={s.nombre}/>
            ))}
          </div>
        </div>
      )}
      <div className="bg-secondayBlue" onClick={() => setCurrentCategory(id)}>
        <div className="flex p-4 cursor-pointer hover:bg-gray-Hover items-center">
          <div className="flex w-full">
            {Icon ? (
              <Icon className="text-lightIconBlue text-xl" />
            ) : (
              <span>❓</span>
            )}
            <span className="ml-3 text-white text-[14px] font-semibold">
              {nombre}
            </span>
          </div>
          <div className="text-gray-300">
            <GrNext />
          </div>
        </div>
      </div>
    </div>
  )
}

const SubCategoryCard = ({name})=>{
return(
   <div className="flex p-4 cursor-pointer hover:bg-gray-Hover items-center">
          <div className="flex w-full">
            <span className="ml-3 text-white text-[14px] font-semibold">
              {name}
            </span>
          </div>
          <div className="text-gray-300">
            <GrNext />
          </div>
        </div>
)
}
export default CategoryCard
