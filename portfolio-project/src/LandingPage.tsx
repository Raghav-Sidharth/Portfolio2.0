import logo from './assets/files/logo.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function LandingPage() {
  return (
    <div name="home" className="w-full h-screen bg-[#eeede1]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold ">
          Raghav Sidharth
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold py-2 text-[#a48948]">
          I'm a Full Stack Developer.
        </h2>
        <p className="py-4 max-w-[700px] font-medium">
          My passion for technology and an unbridled sense of curiosity led me
          to pursue the wide, wonderful world of software development. I aim to
          apply my newfound skills to make beautiful, accessible applications
          for users to engage with.
        </p>

        <div className="py-2">
          <button className=" group  border-2 border-[#07212c] px-6 py-3 my-2 flex items-center hover:bg-[#a48948] hover:border-[#a48948] hover:text-[#eeede1]">
            View My Work
            <div className="group-hover:rotate-90 duration-300  ml-3">
              <span>
                <HiArrowNarrowRight />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
