import { GiHamburgerMenu } from 'react-icons/gi'
import { TbCirclePercentage } from 'react-icons/tb'
import { PiCashRegister } from 'react-icons/pi'
import { FaRegCalendar } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { IoAppsSharp } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoPricetagsOutline } from 'react-icons/io5'
import { FiMessageSquare } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import { FaFireAlt } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import logo from './assets/logo.jpeg'
import { useEffect, useState } from 'react'
import { CategoryMenuCard } from './Categories/CategoryCard'

function Navbar() {
  return (
    <div>
      <div className="">
        <div className="h-[70px] bg-logoWhite flex px-3 items-center">
          <img src={logo} alt="" className="h-full" />
        </div>
        <SubNavbar />
      </div>
    </div>
  )
}

function SubNavbar() {
  return (
    <div className="h-[66px] bg-mainBlue">
      <ul className="h-full flex subnavbar">
        <li className="h-full ">
          <button className="flex bg-ButtonGray hover:cursor-pointer max-w-fit">
            <GiHamburgerMenu />
            Todos los productos
          </button>
        </li>
        <li>
          <button className="bg-SuperPrice hover:bg-SuperPrice-Hover text-white">
            <TbCirclePercentage className="text-2xl" />
            Super precio
          </button>
        </li>
        <li>
          <button className="bg-openRegister hover:bg-openRegister-Hover text-white">
            <PiCashRegister className="text-2xl" />
            Caja abierta
          </button>
        </li>
        <li>
          <button className=" text-white hover:bg-mainBlue-Hover">
            <FaRegCalendar className="text-2xl " />
            Eventos y certificaciones
          </button>
        </li>
        <li>
          <button className=" text-white hover:bg-mainBlue-Hover">
            <BiSupport className="text-2xl" />
            Centro de soporte
            <IoMdArrowDropdown />
          </button>
        </li>
        <li>
          <button className=" text-white hover:bg-mainBlue-Hover">
            <IoAppsSharp className="text-2xl" />
            Apps
            <IoMdArrowDropdown />
          </button>
        </li>
      </ul>
    </div>
  )
}


export const NavbarOnSmall = ({ categories, byCategory }) => {
  const [menuVisible, setMenuVisible] = useState(true)
  const [subMenuVisible, setSubMenuVisible] = useState(false)

  const [currentCategory, setCurrentCategory] = useState(null)
  useEffect(() => {
    
  }, [])
  
  return (
    <div>
      <div>
        {menuVisible && (
          <div className="absolute inset-0 bg-secondayBlue">
            <div className="bg-MainBlue py-5 px-3 flex justify-between items-center border-b-[1px] border-white box">
              <h2 className="text-white text-xl font-semibold">Categorías</h2>
              <button onClick={() => setMenuVisible(!menuVisible)}>
                <IoMdClose className="text-gray-400 text-xl" />
              </button>
            </div>
            <div>
             
              {categories.map((c) => (
                <CategoryMenuCard
                  key={c.id}
                  id={c.id}
                  nombre={c.nombre}
                  nivel={c.nivel}
                  harcodedStyle=" text-white text-[14px] font-semibold"
                  categories={categories}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                  byCategory={byCategory}
                />
              ))}
            </div>
          </div>
        )}
        <div className="px-5 flex bg-logoWhite justify-between">
          <button onClick={() => setMenuVisible(true)}>
            <GiHamburgerMenu />
          </button>
          <div className="h-[50px] bg-logoWhite flex items-center">
            <img src={logo} alt="" className="h-full" />
          </div>
          <div className="text-[17px] flex items-center gap-5">
            <button>
              <FaFireAlt />
            </button>
            <button>
              <CgProfile />
            </button>
            <button className="bg-shoppingOrange p-1 rounded-md">
              <MdOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

function SearchBar() {
  return (
    <div className="w-full max-h-[50px] bg-logoWhite py-2 px-4">
      <div
        className="flex border border-black rounded-2xl items-center mx-auto py-1 px-2 
                      focus-within:border-blue-400 focus-within:shadow-[0_0_10px_1px_rgba(0,123,255,0.5)] 
                      transition duration-200"
      >
        <CiSearch className="mx-3 text-gray-600" />
        <input
          type="text"
          placeholder="Buscar..."
          className="focus:outline-none w-full"
        />
      </div>
    </div>
  )
}

export default Navbar
