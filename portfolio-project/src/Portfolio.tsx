export default function Portfolio() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h3>Gallerina</h3>
        <p>
          Gallerina is a user-friendly art curation website similar to
          Pinterest, allowing users to scroll through and save artworks to their
          personal collections. Logged-in users can also search, filter, and
          manage their collections with ease. One the biggest learning curves
          with this project was the Artsy API we had chosen to use. It was very
          fickle and took us time to get used to. Some of the we wanted to
          collect was not available and had to make do with the information it
          did provide. Our next steps as a team will be to refactor the code and
          deply the site which will take some time.
        </p>

        <p>Built using: React, Redux, Tailwind, TypeScript, SQLite 3,</p>
        <a href="https://github.com/tohora-2023/Gallerina" target="_blank">
          Link to Repo
        </a>
      </div>
      <div>
        <h3>The G.O.A.T Car List</h3>
        <p>
          A project to collect and display some of the rarest, coolest, most
          exciting cars produced to date. Add yonpmur own cars to the list,
          update incorrect information on other cars, or if you feel a car
          doesn&apos;t belong in the collection delete it if you dare. This was
          a very fun project and was the first app built using the full-stack
          method. There were some challenges with deployment using Postgres. The
          Add and Update functionality isn't working to this. Next time I feel
          deploying it as a SQL database will be more benficial.
        </p>
        <p>Built using: React, Redux, TypeScript, SQLite 3,</p>
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
    </div>
  )
}
