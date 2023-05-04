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
    <div name="skills" className="bg-[#eeede1] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-extrabold inline border-b-4 border-[#a48948]">
            Skills & Experience
          </p>
          <p className="font-bold  py-4">
            Some of the software I have worked with to date.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={htmlImg} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={cssImg} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={jsImg}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={tsImg}
              alt="TypeScript Icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={reactImg}
              alt="React Icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={tailwindImg}
              alt="Tailwind Icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={githubImg}
              alt="Github Icon"
            />
            <p className="my-4">GitHub</p>
          </div>
          <div className="rounded hover:shadow-md hover:shadow-[#a48948] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={sqliteImg}
              alt="SQLite3 Icon"
            />
            <p className="my-4">SQLite 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}
