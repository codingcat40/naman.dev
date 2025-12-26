import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {NavLink } from 'react-router-dom'

export default function DropDown() {

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="font-light inline-flex w-full text-lg justify-center rounded-md px-3 py-2 cursor-pointer hover:text-red-500 text-white">
        [Menu]
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/projects"
              
              className="block px-4 py-2 text-lg text-white data-focus:bg-white/5 data-focus:text-red-500 data-focus:outline-hidden"
            >
              My Projects
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-lg text-white data-focus:bg-white/5 data-focus:text-red-500 data-focus:outline-hidden"
            >
              About Me
            </NavLink>
          </MenuItem>
          <MenuItem>
            <a
              href="https://github.com/codingcat40"
              target='__blank'
              className="block px-4 py-2 text-lg text-white data-focus:bg-white/5 data-focus:text-red-500 data-focus:outline-hidden"
            >
              My Github
            </a>
          </MenuItem>
          
          <MenuItem>
            <a
              href="https://www.linkedin.com/in/namanmat25/"
              target='__blank'
              className="block px-4 py-2 text-lg text-white data-focus:bg-white/5 data-focus:text-red-500 data-focus:outline-hidden"
            >
                Connect With me
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
