import { GiHamburgerMenu } from 'react-icons/gi'
import { TbCirclePercentage } from "react-icons/tb";
import { PiCashRegister } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoAppsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


import logo from './assets/logo.jpeg'

function Navbar() {
  return (
    <div className="">
      <div className="h-[70px] bg-logoWhite">
        <img src={logo} alt="" className="h-full" />
      </div>
      <SubNavbar />
    </div>
  )
}

function SubNavbar() {
  return (
    <div className="h-[66px] bg-mainBlue">
      <ul className="h-full flex subnavbar">
        <li className="h-full">
            <button className='flex bg-ButtonGray hover:cursor-pointer max-w-fit'>
              <GiHamburgerMenu />
              Todos los productos
            </button>
        </li>
        <li>
            <button className='bg-SuperPrice hover:bg-SuperPrice-Hover text-white'>
              <TbCirclePercentage className='text-2xl'/>
              Super precio
            </button>
          </li>
          <li>
            <button className='bg-openRegister hover:bg-openRegister-Hover text-white'>
              <PiCashRegister className='text-2xl'/>
              Caja abierta
            </button>
          </li>
          <li>
            <button className=' text-white hover:bg-mainBlue-Hover'>
              <FaRegCalendar className='text-2xl '/>
              Eventos y certificaciones
            </button>
          </li>
          <li>
            <button className=' text-white hover:bg-mainBlue-Hover'>
              <BiSupport className='text-2xl'/>
              Centro de soporte
              <IoMdArrowDropdown />

            </button>
          </li>
          <li>
            <button className=' text-white hover:bg-mainBlue-Hover'>
              <IoAppsSharp  className='text-2xl'/>
              Apps
              <IoMdArrowDropdown />

            </button>
          </li>
      </ul>
    </div>
  )
}

export default Navbar
