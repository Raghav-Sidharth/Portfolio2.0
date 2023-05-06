import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import resume from './assets/files/Raghav-Sidharth-CV-2023.pdf'

export default function Footer() {
  return (
    <div className=" w-full h-[100px] bg-[#07212c] text-[#eeede1]  ">
      <div className="sd:pt-5 sd:flex sd:flex-col sd:justify-center sd:items-center md:flex md:flex-row md:justify-between sd:pt-10 sd:px-10 md:items-center md:pt-10 md:px-10">
        <div className="sd:pt-5 sd:items-center sd:px-5">
          <p className="font-bold">Built by Raghav Sidharth 2023</p>
        </div>
        <div className=" sd:pt-5 hover:text-[#a48948] duration-100">
          <a href={resume}>
            <p>Download my Resume!</p>
          </a>
        </div>
        <div className="flex flex-row">
          <div className="pr-5">
            <a href="https://github.com/Raghav-Sidharth">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="pr-5">
            <a href="https://www.linkedin.com/in/raghav-sidharth-4b0932188/">
              <FaLinkedin size={30} />
            </a>
          </div>
          <div>
            <a href="mailto:raghav.sidharth@live.com">
              <HiOutlineMail size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
