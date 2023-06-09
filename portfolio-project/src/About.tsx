export default function About() {
  return (
    <>
      <div
        role="main"
        id="about"
        className=" w-full h-screen bg-[#07212c] text-[#eeede1] font-proxima"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1010px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <h1 className=" md:text-6xl font-extrabold inline border-b-4 border-[#a48948]">
                About Me
              </h1>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1010px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right sd:text-3xl md:text-4xl font-bold">
              <p>
                Prior, I had been a freelance
                <em className="text-[#a48948]"> Graphic Designer</em> for over
                six years!
              </p>
            </div>
            <div>
              <p>
                Specialising in print, packaging, and identity design. My goal
                throughout my career has been to facilitate the needs of small
                and large businesses, utilising e-commerce solutions and eDM
                marketing strategies to grow and reach new customers.
              </p>
              <div className="pt-4">
                <p>
                  I'm also passionate about exploring new horizons and
                  challenging myself in every way possible. From boxing to
                  writing and producing short-films, I have diverse interests
                  that keep me on my toes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
