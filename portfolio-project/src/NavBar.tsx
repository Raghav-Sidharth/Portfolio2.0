import { useState } from 'react'
import logoBlue from './assets/files/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from './assets/files/Raghav-Sidharth-CV-2023.pdf'
import { Link } from 'react-scroll'

export default function NavBar() {
  const [nav, setNav] = useState(false)
  function handleClick() {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#eeede1] text-[#0a192f] font-proxima">
      <div>
        <img src={logoBlue} alt="White Logo" style={{ width: '50px' }} />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-75} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-120} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
        </li>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#eeede1] flex flex-col justify-center items-center'
        }
      >
        <li className=" py-6  text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" py-6  text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" py-6  text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className=" py-6  text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            offset={-150}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className=" py-6  text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text-[#eeede1] bg-blue-600">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="https://www.linkedin.com/in/raghav-sidharth-4b0932188/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text-[#eeede1] bg-gray-900">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="https://github.com/Raghav-Sidharth"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text-[#eeede1] bg-red-800">
            <a
              className="flex justify-between items-center w-full font-bold"
              href="mailto:raghav.sidharth@live.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 text-[#eeede1] bg-[#a48948]">
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
