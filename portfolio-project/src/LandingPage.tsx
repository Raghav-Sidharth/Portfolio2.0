import logo from './assets/files/logo.png'

export default function LandingPage() {
  return (
    <div>
      <div className="Hero-Container" id="hero">
        <header>
          <div className="Hero-Container-Content">
            <div className="Hero-Container-Content-Text">
              <h1>Hello there,</h1>
              <p>I&apos;m Raghav Sidharth</p>
              <p>A Full Stack Web Developer based in Auckland New Zealand</p>
            </div>
            <img className="Logo-Hero" src={logo} alt="Logo" />
          </div>
        </header>
      </div>
    </div>
  )
}
