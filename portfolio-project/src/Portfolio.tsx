import Gallerina from './assets/files/Gallerina.png'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export default function Portfolio() {
  return (
    <>
      <div
        name="projects"
        className=" w-full h-[1750px] bg-[#07212c] text-[#eeede1] font-proxima"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[2000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-20 pl-4">
              <p className="text-6xl font-extrabold inline border-b-4 border-[#a48948]">
                Projects
              </p>
            </div>
            <div></div>
          </div>
          <div className="rounded-lg hover:shadow-lg  hover:shadow-[#a48948] duration-500 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
            <div>
              <img src={Gallerina} alt="" />
            </div>
            <div>
              <div className="sm:text-left ">
                <p>Project</p>

                <p className="text-4xl font-black pb-5">Gallerina</p>
              </div>
              <p>
                Gallerina is a user-friendly art curation website similar to
                Pinterest, allowing users to scroll through and save artworks to
                their collections. Logged-in users can add and manage their
                collected paintings with ease.
              </p>
              <div className="pt-4">
                <p>
                  One of this project's most significant learning curves was the
                  Artsy API we had chosen to use. It was very inconsistent and
                  took us time to get used to. Some of the data we wanted to
                  collect was unavailable, and we had to make do with the
                  information it provided. Our next steps as a team will be to
                  refactor the code and deploy the site, which will take some
                  time.
                </p>
                <p className="pt-4">
                  Built using: React, Redux, SQLite 3, Tailwind CSS, TypeScript
                </p>
                <div className=" flex flex-wrap pt-5">
                  <a href="/">
                    <div className="pr-5">
                      <FaGithub size={50} />
                    </div>
                  </a>
                  <div className="pl-5">
                    <a href="/">
                      <CgWebsite size={50} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg hover:shadow-lg  hover:shadow-[#a48948] duration-500 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
            <div>
              <div className="sm:text-left ">
                <p>Project</p>

                <p className="text-4xl font-black pb-5">Gallerina</p>
              </div>
              <p>
                Gallerina is a user-friendly art curation website similar to
                Pinterest, allowing users to scroll through and save artworks to
                their collections. Logged-in users can add and manage their
                collected paintings with ease.
              </p>
              <div className="pt-4">
                <p>
                  One of this project's most significant learning curves was the
                  Artsy API we had chosen to use. It was very inconsistent and
                  took us time to get used to. Some of the data we wanted to
                  collect was unavailable, and we had to make do with the
                  information it provided. Our next steps as a team will be to
                  refactor the code and deploy the site, which will take some
                  time.
                </p>
                <p className="pt-4">
                  Built using: React, Redux, SQLite 3, Tailwind CSS, TypeScript
                </p>
                <div className=" flex flex-wrap pt-5">
                  <a href="/">
                    <div className="pr-5">
                      <FaGithub size={50} />
                    </div>
                  </a>
                  <div className="pl-5">
                    <a href="/">
                      <CgWebsite size={50} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={Gallerina} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
