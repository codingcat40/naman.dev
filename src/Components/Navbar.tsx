import { NavLink, useLocation } from 'react-router-dom';
import DropDown from './DropDown'

const Navbar = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/'
  return (
    <>
    {
          !isHomeRoute && 
          <div className='sticky top-0 left-0 h-16 px-6 flex items-center justify-between bg-black/40 backdrop-blur-md z-50'>
            <NavLink className={`block px-4 py-2 text-lg text-white hover:text-red-500 duration-150 data-focus:outline-hidden`} to="/">[Home]</NavLink>
          </div>
    }
    <div className="fixed top-0 right-0 h-16 px-6 flex items-center justify-between  z-50">
          <DropDown />
    </div>
    </>
  )
}

export default Navbar