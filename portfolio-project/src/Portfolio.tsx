import Gallerina from './assets/files/Gallerina.png'
import GOAT from './assets/files/GOAT Car List.png'
import Logo from './assets/files/Logo Decor-21.png'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export default function Portfolio() {
  return (
    <div className="sm:w-full sm:h-[2500px]  bg-[#07212c] ">
      <div
        id="projects"
        className=" w-full h-full bg-[#07212c] text-[#eeede1] font-proxima"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[2000px] w-full flex flex-col justify-center items-center gap-8 ">
            <div className="sm:text-right sm:pb-20 md:pb-20 pl-4">
              <div className="pt-10">
                <h1 className="sm:text-3xl sm:mt-10 md:text-6xl pt-10 font-extrabold inline border-b-4 border-[#a48948]">
                  Projects
                </h1>
              </div>
              <div></div>
            </div>
            <div className="rounded-lg hover:shadow-lg  hover:shadow-[#a48948] duration-500 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
              <div>
                <img
                  className="sm:min-w-100px sm:min-h-100px md:max-w-250px md:max-h-250px rounded-lg"
                  src={Gallerina}
                  alt="Gallerina Logo"
                />
              </div>
              <div>
                <div className="sm:text-left ">
                  <h2>Project</h2>

                  <h2 className="sm:text-2xl md:text-4xl font-black pb-5">
                    Gallerina
                  </h2>
                </div>
                <p>
                  Gallerina is a user-friendly art curation website similar to
                  Pinterest, allowing users to scroll through and save artworks
                  to their collections. Logged-in users can add and manage their
                  collected paintings with ease.
                </p>
                <div className="pt-4">
                  <p>
                    One of this project's most significant learning curves was
                    the Artsy API we had chosen to use. It was very inconsistent
                    and took us time to get used to. Some of the data we wanted
                    to collect was unavailable, and we had to make do with the
                    information it provided. Our next steps as a team will be to
                    refactor the code and deploy the site, which will take some
                    time.
                  </p>
                  <p className="pt-4">
                    Built using: React, Redux, SQLite 3, Tailwind CSS,
                    TypeScript, Node.js, Express Server, Knex.
                  </p>
                  <div className=" flex flex-wrap pt-5">
                    <a
                      href="https://github.com/tohora-2023/Gallerina/tree/dev"
                      target="_blank"
                    >
                      <div className="pr-5">
                        <FaGithub size={50} />
                        <p className="pt-2">Github</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="  rounded-lg hover:shadow-lg  hover:shadow-[#a48948] duration-500 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
              <div>
                <img
                  className="sm:min-w-100px sm:min-h-100px md:max-w-250px md:max-h-250px rounded-lg"
                  src={GOAT}
                  alt="Greatest of all time Cars"
                />
              </div>
              <div>
                <div className="sm:text-left ">
                  <h2>Project</h2>

                  <h2 className="sm:text-3xl md:text-4xl font-black pb-5">
                    G.O.A.T Car List
                  </h2>
                </div>
                <p>
                  Ever wanted to collect some of the rarest, coolest, unique
                  cars but your wallet screams in pain at the prospect of paying
                  for and taking care of them?
                </p>
                <div className="pt-4">
                  <p>
                    Well I did too! Inspired by games like Forza, I wanted to
                    collate a list of the greatest cars ever made and collect
                    them using the wacky magical world of the internet.
                    Utilising full CRUD operations, this website will allow you
                    to add your own car to the list with ease, if the
                    information is incorrect you can update the data, or
                    outright delete them if you dare!
                  </p>
                  <p className="pt-4">
                    Built using: React, Redux, SQLite 3, CSS 3, TypeScript,
                    Node.js, Express Server, Knex.
                  </p>
                  <div className=" flex flex-wrap pt-5">
                    <a
                      href="https://github.com/tohora-2023/my-fullstack-collection/tree/raghav "
                      target="_blank"
                    >
                      <div className="pr-5 text-center">
                        <FaGithub size={50} />
                        <p className="pt-2">Github</p>
                      </div>
                    </a>

                    <div className="pl-5">
                      <a
                        href="http://car-collection.devacademy.nz/"
                        target="_blank"
                      >
                        <div className="pr-5  text-center">
                          <CgWebsite size={50} />
                          <p className="pt-2">Live</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  rounded-lg hover:shadow-lg  hover:shadow-[#a48948] duration-500 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-10">
              <div>
                <img
                  className="sm:min-w-100px sm:min-h-100px md:max-w-250px md:max-h-250px rounded-lg"
                  src={Logo}
                  alt="Greatest of all time Cars"
                />
              </div>
              <div>
                <div className="sm:text-left ">
                  <h2>Project</h2>

                  <h2 className="sm:text-3xl md:text-4xl font-black pb-5">
                    Personal Portfolio
                  </h2>
                </div>
                <p>
                  The website you are currently on, if you haven't noticed
                  already is my portfolio, took a few attempts and countless
                  wireframes to build this website.
                </p>
                <div className="pt-4">
                  <p>
                    Using a combination of different tools, I wanted to create a
                    website inline with my personal styling and would feel like
                    an extension of my CV. There were some hiccups such as some
                    of the accessibility features still need to be fully ironed
                    out, and some elements needing more responsive breakpoints.
                  </p>
                  <p className="pt-4">
                    Built using: Vite, React, TypeScript, Tailwind CSS, React
                    Icons, deployed using Netlify.
                  </p>
                  <div className=" flex flex-wrap pt-5">
                    <a
                      href="https://github.com/Raghav-Sidharth/Portfolio2.0"
                      target="_blank"
                    >
                      <div className="pr-5 text-center">
                        <FaGithub size={50} />
                        <p className="pt-2">Github</p>
                      </div>
                    </a>

                    <div className="pl-5">
                      <a
                        href="https://raghav-sidharth-dev-portfolio.netlify.app/"
                        target="_blank"
                      >
                        <div className="pr-5  text-center">
                          <CgWebsite size={50} />
                          <p className="pt-2">Live</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 sd:w-full sd:h-[500px] bg-[#07212c]">
        <div></div>
      </div>
    </div>
  )
}
