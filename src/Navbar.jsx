import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  return (
    <div>
      <div className="h-[70px] bg-blue-400"></div>
      <SubNavbar />
    </div>
  )
}

function SubNavbar() {
  return (
    <div className="h-[66px] bg-[#003D75]">
      <ul className='h-full'>
        <li className='h-full'><span className='flex items-center bg-red-400 h-full hover:cursor-pointer max-w-fit'><GiHamburgerMenu />Todos los productos</span></li>
      </ul>
    </div>
  )
}

export default Navbar
