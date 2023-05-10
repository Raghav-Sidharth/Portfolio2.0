// React Icons
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiNodedotjs,
} from 'react-icons/si'

import { FaGithub } from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiReact,
  SiShopify,
} from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <div
        id="skills"
        className=" bg-[#eeede1] pt-[75px] pb-[75px] font-proxima "
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center sm:w-full sm:h-screen  ">
          <div className="pt-[100px]">
            <h1 className="sd:text-3xl md:text-6xl font-extrabold inline border-b-4 border-[#a48948]">
              Skills & Experience
            </h1>
            <h2 className="font-black  py-10 md:text-3xl">
              Some of the software I have worked with to date.
            </h2>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-10 pb-[100px] text-center py-8">
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="text-blue-700 flex pt-5 justify-center">
                <SiAdobephotoshop size={80} />
              </div>

              <p className="my-4 font-bold">Adobe Photoshop</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="text-yellow-600 flex pt-5 justify-center">
                <SiAdobeillustrator size={80} />
              </div>

              <p className="my-4 font-bold">Adobe Illustrator</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="text-pink-600 flex pt-5 justify-center">
                <SiAdobeindesign size={80} />
              </div>

              <p className="my-4 font-bold">Adobe InDesign</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="text-orange-500 flex pt-5 justify-center">
                <SiHtml5 size={80} />
              </div>

              <p className="my-4 font-bold">HTML</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="flex text-blue-500 pt-5 justify-center">
                <SiCss3 size={80} />
              </div>
              <p className="my-4 font-bold">CSS</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className="text-yellow-500 pt-5 flex justify-center">
                <SiJavascript size={80} />
              </div>
              <p className="my-4 font-bold">JavaScript</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-blue-500 pt-5 flex justify-center">
                <SiTypescript size={80} />
              </div>
              <p className="my-4 font-bold">TypeScript</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-blue-500 pt-5 flex justify-center">
                <SiReact size={80} />
              </div>
              <p className="my-4 font-bold">React</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-cyan-400 pt-5 flex justify-center">
                <SiTailwindcss size={80} />
              </div>
              <p className="my-4 font-bold">Tailwind CSS</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-gray-800 pt-5 flex justify-center">
                <FaGithub size={80} />
              </div>
              <p className="my-4 font-bold">GitHub</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-blue-500 pt-5 flex justify-center">
                <SiSqlite size={80} />
              </div>
              <p className="my-4 font-bold">SQLite 3</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-green-500 pt-5 flex justify-center">
                <SiShopify size={80} />
              </div>
              <p className="my-4 font-bold">Shopify</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <div className=" text-green-600 pt-5 flex justify-center">
                <SiNodedotjs size={80} />
              </div>
              <p className="my-4 font-bold">Node JS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
