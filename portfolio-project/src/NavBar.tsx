import { useState } from 'react'
import logoBlue from './assets/files/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from './assets/files/Raghav-Sidharth-CV-2023.pdf'

export default function NavBar() {
  const [nav, setNav] = useState(false)
  function handleClick() {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#eeede1] text-[#0a192f]">
      <div>
        <img src={logoBlue} alt="White Logo" style={{ width: '50px' }} />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className=" py-6  text-4xl">Home</li>
        <li className=" py-6  text-4xl">About</li>
        <li className=" py-6  text-4xl">Skills</li>
        <li className=" py-6  text-4xl">Projects</li>
        <li className=" py-6  text-4xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="https://www.linkedin.com/in/raghav-sidharth-4b0932188/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="https://github.com/Raghav-Sidharth"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a48948]">
            <a
              className="flex justify-between items-center w-full font-bold"
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
