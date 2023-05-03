import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <button>
        <Link to="hero">Home</Link>
      </button>
      <button>
        <Link to="about">About</Link>
      </button>
      <button>
        <Link to="projects">Projects</Link>
      </button>
    </div>
  )
}
