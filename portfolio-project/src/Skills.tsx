import htmlImg from './assets/Software Logos/html.png'
import reactImg from './assets/Software Logos/react.png'
import cssImg from './assets/Software Logos/css.png'
import tailwindImg from './assets/Software Logos/tailwind.png'
import tsImg from './assets/Software Logos/typescript.png'
import sqliteImg from './assets/Software Logos/SQLite.png'
import jsImg from './assets/Software Logos/javascript.png'
import githubImg from './assets/Software Logos/github.png'

export default function Skills() {
  return (
    <>
      <div className="sd:w-full sd:h-[1000px] bg-[#eeede1]"></div>
      <div
        id="skills"
        className="bg-[#eeede1] md:w-full md:h-screen font-proxima"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pt-10">
            <h1 className="sd:text-3xl md:text-6xl font-extrabold inline border-b-4 border-[#a48948]">
              Skills & Experience
            </h1>
            <h2 className="font-black  py-10 md:text-3xl">
              Some of the software I have worked with to date.
            </h2>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={htmlImg}
                alt="HTML Icon"
              />
              <p className="my-4 font-bold">HTML</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img className="w-20 mx-auto py-4" src={cssImg} alt="CSS Icon" />
              <p className="my-4 font-bold">CSS</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={jsImg}
                alt="JavaScript Icon"
              />
              <p className="my-4 font-bold">JavaScript</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={tsImg}
                alt="TypeScript Icon"
              />
              <p className="my-4 font-bold">TypeScript</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={reactImg}
                alt="React Icon"
              />
              <p className="my-4 font-bold">React</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={tailwindImg}
                alt="Tailwind Icon"
              />
              <p className="my-4 font-bold">Tailwind CSS</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={githubImg}
                alt="Github Icon"
              />
              <p className="my-4 font-bold">GitHub</p>
            </div>
            <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto py-4"
                src={sqliteImg}
                alt="SQLite3 Icon"
              />
              <p className="my-4 font-bold">SQLite 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
