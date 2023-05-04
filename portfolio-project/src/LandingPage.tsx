import logo from './assets/files/logo.png'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function LandingPage() {
  return (
    <div name="home" className="w-full h-screen bg-[#eeede1]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold ">
          Raghav Sidharth
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold py-2">
          I'm a Full Stack Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          My passion for technology and an unbridled sense of curiosity led me
          to pursue the wide, wonderful world of software development. I aim to
          apply my newfound skills to make beautiful, accessible applications
          for users to engage with.
        </p>
        <p className="py-1 max-w-[700px]">
          Prior, I had been a practising graphic designer for over four years,
          specialising in print, packaging, and identity design. My goal
          throughout my career has been to facilitate the needs of small and
          large businesses, utilising e-commerce solutions and eDM marketing
          strategies to grow and reach new customers.
        </p>
        <div className="py-2">
          <button className=" group border-2 border-[#07212c] px-6 py-3 my-2 flex items-center hover:bg-[#a48948] hover:border-[#a48948] hover:text-[#eeede1]">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
