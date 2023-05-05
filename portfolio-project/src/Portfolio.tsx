export default function Portfolio() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#eeede1] font-proxima"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-black inline border-b-4 border-[#a48948]">
            Projects
          </p>
          <p className="py-6">Some of my recent Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#a48948] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div>
              <span>
                <p className="text-2xl font-extrabold py-5 px-5">Gallerina</p>
                <p className="py-5 px-5">
                  {' '}
                  Gallerina is a user-friendly art curation website similar to
                  Pinterest, allowing users to scroll through and save artworks
                  to their personal collections. Logged-in users can also add
                  and manage their collections with ease.
                </p>
              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <div>
<h2>Projects</h2>
<div>
  <h3>Gallerina</h3>
  <p>
    Gallerina is a user-friendly art curation website similar to
    Pinterest, allowing users to scroll through and save artworks to their
    personal collections. Logged-in users can also search, filter, and
    manage their collections with ease. One the biggest learning curves
    with this project was the Artsy API we had chosen to use. It was very
    fickle and took us time to get used to. Some of the data we wanted to
    collect was not available and had to make do with the information it
    did provide. Our next steps as a team will be to refactor the code and
    deply the site which will take some time.
  </p>

  <p>Built using: React, Redux, Tailwind, TypeScript, SQLite 3</p>
  <a href="https://github.com/tohora-2023/Gallerina" target="_blank">
    Link to Repo
  </a>
</div>
<div>
  <h3>The G.O.A.T Car List</h3>
  <p>
    A project to collect and display some of the rarest, coolest, most
    exciting cars produced to date. Add your own cars to the list, update
    incorrect information on other cars, or if you feel a car doesn&apos;t
    belong in the collection delete it if you dare. This was a very fun
    project and was the first app built using the full-stack method. There
    were some challenges with deployment using Postgres. The Add and
    Update functionality isn't working to as intended and requires a
    refresh to see the new data. Next time I feel deploying it as a SQL
    database will be more benficial.
  </p>
  <p>Built using: React, Redux, TypeScript, SQLite 3</p>
  <a
    href="https://github.com/tohora-2023/my-fullstack-collection/tree/raghav"
    target="_blank"
  >
    Link to Repo
  </a>
  <br />
  <a href="http://car-collection.devacademy.nz/" target="_blank">
    Link to Depolyed Version
  </a>
</div>
</div> */
}
